import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttendanceList.css';
import Sidebar from '../Header/adminSidebar';
import { LoginContext } from '../../../contexts/LoginContextProvider';
import * as Swal from '../../../apis/alert';
import { fetchAttendanceData } from '../../../apis/attendance'

const AttendanceTable = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  const [option, setOption] = useState({ keyword: '', code: '', orderCode: '' });
  const [page, setPage] = useState({ page: 1, rows: 10, first: 1, last: 1, start: 1, end: 1 });
  const { isLogin, userInfo, roles, isLoading } = useContext(LoginContext);
  const navigate = useNavigate();

  // 로딩 상태 
  const [isTableLoading, setIsTableLoading] = useState(true);

  console.dir("권한 뭥미" + roles);
  console.log("roles:", JSON.stringify(roles, null, 2));  

  // 권한 체크 
  useEffect(() => {
    if (isLoading) {
      return; // 로딩 중이면 .. 아무것도 안함
    }

    if (!isLogin) {
      Swal.alert('로그인을 시도해주세요', '로그인 화면으로 이동합니다', 'warning', () => {
        navigate('/login');
      });
      return;
    }

    if (!userInfo) {
      Swal.alert('잘못된 접근입니다.', '메인 화면으로 이동합니다.', 'warning', () => {
        navigate('/');
      });
      return;
    }

    if (roles.isUser) {
      Swal.alert('권한이 없습니다.', '메인 화면으로 이동합니다.', 'warning', () => {
        navigate('/');
      });
    } else {
      fetchAttendanceList(); 
    }
  }, [isLoading, isLogin, userInfo, roles, navigate]);

  // 출석 리스트
  const fetchAttendanceList = async (pageNumber = 1) => {
    setIsTableLoading(true);
    try {
      const response = await fetchAttendanceData(pageNumber, option.keyword);
      if (response) {
        const { attendanceList, option: newOption, page: newPage } = response;
        setAttendanceList(attendanceList);
        setOption(newOption);
        setPage(newPage); 
      } else {
        console.error('출석 목록을 불러오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('출석 목록을 불러오는 중 오류 발생:', error);
    } finally {
      setIsTableLoading(false); 
    }
  };

  // 페이지 변경 
  const handlePageChange = (pageNumber) => {
    setPage((prevPage) => ({
      ...prevPage,
      page: pageNumber
    }));
    fetchAttendanceList(pageNumber); 
  };

 
  if (isLoading || !isLogin || !userInfo || roles.isUser) {
    return null;
  }

  return (
    <div className="oswAttendanceList">
      <div className="container">
        <Sidebar />
        <div className="main">
          <div className="inner">
            <div className="mainTitle">
              <h2 style={{ fontSize: '22px', top: '40px', font: 'inherit' }}>출석 내역</h2>
            </div>

            {/* 검색 폼 */}
            <form
              className="search"
              onSubmit={(e) => {
                e.preventDefault();
                fetchAttendanceList(1);
              }}
            >
              <input
                type="text"
                name="keyword"
                placeholder="검색어를 입력해주세요."
                value={option.keyword}
                onChange={(e) => setOption({ ...option, keyword: e.target.value })}
              />
              <button type="submit" className="button" style={{ zIndex: 10000 }}>검색</button>
            </form>

            {/* 출석 테이블 */}
            <div className="list">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>핸드폰 번호</th>
                    <th>입장 시각</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceList.length === 0 ? (
                    <tr>
                      <td colSpan="6" align="center">출석 이용자가 없습니다.</td>
                    </tr>
                  ) : (
                    attendanceList.map((attendance) => (
                      <tr key={attendance.qrId}>
                        <td>{attendance.userNo}</td>
                        <td>{attendance.users.id}</td>
                        <td>{attendance.users.name}</td>
                        <td>{attendance.users.email}</td>
                        <td>{attendance.users.phone}</td>
                        <td>{new Date(attendance.checkTime).toLocaleString()}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* 페이지네이션 */}
            <div className="pagination">
              <a onClick={() => handlePageChange(page.first)} className="first">[처음]</a>
              {page.page !== page.first && (
                <a onClick={() => handlePageChange(page.page - 1)} className="prev">[이전]</a>
              )}
              {Array.from({ length: page.end - page.start + 1 }, (_, idx) => page.start + idx).map((no) => (
                <a
                  key={no}
                  onClick={() => handlePageChange(no)}
                  className={page.page === no ? 'active' : ''}
                >
                  {no}
                </a>
              ))}
              {page.page !== page.last && (
                <a onClick={() => handlePageChange(page.page + 1)} className="next">[다음]</a>
              )}
              <a onClick={() => handlePageChange(page.last)} className="last">[마지막]</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
