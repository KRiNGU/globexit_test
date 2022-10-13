import axios from 'axios';

const defaultHeaders = {};

const defaultBodyHeaders = {
  ...defaultHeaders,
  'Content-Type': 'application/json',
};

const goodStatus = (status: number) => [200, 201, 204].includes(status);

export const mainAxios = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  headers: defaultBodyHeaders,
  validateStatus: goodStatus,
});
