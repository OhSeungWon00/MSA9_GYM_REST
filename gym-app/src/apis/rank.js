// apis/rank.js

export const getRankingData = async () => {
    try {
      const response = await fetch('http://localhost:8080/ranking');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch ranking data');
      }
    } catch (error) {
      console.error('Error fetching ranking data:', error);
      return []; // 오류 발생 시 빈 배열 반환
    }
  };
  