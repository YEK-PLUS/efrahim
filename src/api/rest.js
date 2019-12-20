import axios from 'axios';
import querystring  from 'querystring';
const instance = axios.create({
  baseURL: 'http://kuaforefrahim.com/panel/index.php/api',
  timeout: 5000,
});

instance.interceptors.response.use(
  response => {
  	return response.data.data
  },
  error => {
    const code = error.response && error.response.data;
    return code;
  },
);
export default async (path, body) => {
  const response = await instance.post(path, querystring.stringify(body));
  return response;
};
