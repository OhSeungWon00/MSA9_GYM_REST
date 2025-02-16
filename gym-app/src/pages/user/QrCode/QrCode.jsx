import React, { useEffect, useState, useContext } from 'react';
import QRCode from 'qrcode';
import { LoginContext } from '../../../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getTicketBuyList, getStartedTicket } from '../../../apis/ticketList';
import './QrCode.css';

const QrCode = () => {
  const { isLogin, userInfo } = useContext(LoginContext);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [qrCodeBase64, setQrCodeBase64] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [expired, setExpired] = useState(false);
  const [ticketBuyList, setTicketBuyList] = useState([]);
  const [startedTicket, setStartedTicket] = useState(null);
  const navigate = useNavigate();

  const userNo = userInfo?.no;

  useEffect(() => {
    if (!isLogin || !userInfo) {
      navigate('/ticket/ChoiceTicket');
      return;
    }

    if (userNo) {
      getTicketBuyList(userNo)
        .then((data) => {
          setTicketBuyList(data);
          const startedTicket = getStartedTicket(data);
          setStartedTicket(startedTicket);
          if (!startedTicket) {
            Swal.fire({
              icon: 'error',
              title: '이용권을 구매해주세요',
              text: '헬스장 입장 시 이용권이 필요합니다.',
            }).then(() => {
              navigate('/ticket/ChoiceTicket');
            });
          } else {
            generateQRCode();
          }
        })
        .catch((error) => console.error('API 호출 중 오류 발생:', error));
    }
  }, [isLogin, userNo, userInfo, navigate]);

  useEffect(() => {
    if (countdown <= 0) {
      setExpired(true);
      deleteQRCode();
    }

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    if (startedTicket) {
      generateQRCode();
    }
  }, [startedTicket]);

  const generateQRCode = async () => {
    try {
      const uuid = generateUUID();
      const url = `/user/attendance/check?qrcodeId=${userInfo.no}&uuid=${uuid}`;
      const qrCodeImage = await QRCode.toDataURL(url);
      setQrCodeUrl(url);
      setQrCodeBase64(qrCodeImage);

      // QR 코드 정보 로컬 스토리지에 저장 (만료 시간 포함)
      const expireTime = Date.now() + 60000; // 60초 후 만료
      localStorage.setItem('qrCodeData', JSON.stringify({ url, expireTime }));

    } catch (err) {
      console.error('QR 코드 생성 실패:', err);
    }
  };

  const deleteQRCode = async () => {
    console.log('QR 코드 만료 처리');
    localStorage.removeItem('qrCodeData'); // 로컬 스토리지에서 QR 코드 삭제
  };

  // QR 코드 만료 여부 확인하는 함수
  const isQRCodeExpired = () => {
    const qrData = localStorage.getItem('qrCodeData');
    if (!qrData) return true;

    const { expireTime } = JSON.parse(qrData);
    return Date.now() > expireTime;
  };

  return (
    <div className="oswQrCode">
      <div className="qr-container">
        <div className="qr-code" id="qrCodeContainer">
          {!expired ? (
            <img src={qrCodeBase64} alt="QR 코드" />
          ) : (
            <p style={{ color: 'red' }}>QR 코드가 만료되었습니다.</p>
          )}
        </div>
        <div className="timer">
          유효시간: <span id="countdown">{expired ? '만료되었습니다.' : countdown}</span>
          {!expired && <span id="unit">초</span>}
        </div>
        {!expired && (
          <div className="url-text" id="URLTEXT2">
            QR 코드 URL:{' '}
            <a
              href={isQRCodeExpired() ? '#' : qrCodeUrl} // 만료 시 이동 차단
              onClick={(e) => {
                if (isQRCodeExpired()) {
                  e.preventDefault();
                  Swal.fire({
                    icon: 'error',
                    title: 'QR 코드가 만료되었습니다.',
                    text: '새로운 QR 코드를 생성해주세요.',
                  });
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              id="URLTEXT"
            >
              {qrCodeUrl}
            </a>
          </div>
        )}
        <button className="main-button" id="mainButton" onClick={() => (window.location.href = '/')}>
          메인으로
        </button>
      </div>
    </div>
  );
};

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default QrCode;
