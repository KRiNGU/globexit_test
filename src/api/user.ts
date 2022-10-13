import { mainAxios } from './axios';

export const getUsers = (search?: string) =>
  mainAxios.get(search ? '?term=' + search : '');
