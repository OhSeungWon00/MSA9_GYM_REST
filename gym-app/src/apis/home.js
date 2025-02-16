import api from './api';


//비동기
export const getUserCount = async () => {
  try {
    const response = await api.get('/admin/attendance/userCount');
    console.log('API Response:', response.data); 
    return response.data.userCount;  
  } catch (error) {
    console.error('Error fetching user count:', error.response?.data || error.message);
    return 0;  // 기본값으로 0 
  }
};
