// apis/ticketList.js
export const getTicketBuyList = async (userNo) => {
    try {
      const response = await fetch(`http://localhost:8080/buyList/users/${userNo}`);
      if (!response.ok) {
        throw new Error('티켓 구매 내역을 가져오는 데 실패했습니다.');
      }
      const data = await response.json();
      return data.ticketBuyList || [];  
    } catch (error) {
      console.error('티켓 구매 내역 API 호출 중 오류 발생:', error);
      return [];
    }
  };
  
  export const getStartedTicket = (ticketBuyList) => {
    if (ticketBuyList.length > 0) {
      return ticketBuyList.filter(b => b.status === '정상')
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0] || null;
    }
    return null;
  };
  