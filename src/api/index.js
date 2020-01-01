import axios from 'axios';
import querystring  from 'querystring';
import {API_URL} from '../settings';
const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

instance.interceptors.response.use(
  response => {
  	return response.data.data
  },
  error => {
    console.log(error)
    const code = error.response && error.response.data;
    return code;
  },
);
export default async (path, body) => {
  const response = await instance.post(path, querystring.stringify(body));
  return response;
};
