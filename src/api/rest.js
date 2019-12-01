import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/',
  timeout: 5000,
});
instance.interceptors.response.use(
  response => response.data,
  error => {
    const code = error.response && error.response.data;
    return code;
  },
);
export default async (path, body) => {
  const response = await instance.post(path, body);
  return response;
};
