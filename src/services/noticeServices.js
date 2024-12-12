import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notices';

export const getNotices = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createNotice = async (formData) => {
  const response = await axios.post(`${API_URL}/create`, formData);
  return response.data;
};

export const deleteNotice = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
