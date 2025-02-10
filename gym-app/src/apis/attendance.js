// attendance.js
export const fetchAttendanceData = async (pageNumber = 1, keyword = '') => {
    try {
      const response = await fetch(`http://localhost:8080/admin/attendance/list?page=${pageNumber}&keyword=${keyword}`);
      if (response.ok) {
        const { attendanceList, option, page } = await response.json();
        return { attendanceList, option, page };
      } else {
        throw new Error('출석 목록을 불러오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('출석 목록을 불러오는 중 오류 발생:', error);
      return { attendanceList: [], option: {}, page: {} };
    }
  };
  