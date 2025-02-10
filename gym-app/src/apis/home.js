import api from './api';

export const getUserCount = async () => {
  try {
    const response = await api.get('/admin/attendance/userCount');
    console.log('API Response:', response.data); // API 응답 확인
    return response.data.userCount;  // userCount 값만 반환
  } catch (error) {
    console.error('Error fetching user count:', error.response?.data || error.message);
    return 0;  // 기본값으로 0 반환
  }
};
