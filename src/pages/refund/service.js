import request from 'utils/request';
import config from 'config/config.json';

export const getHeader = () => request(`${config.API_URL}/header`);

export const getTimeLine = () => {
  request(`${config.API_URL}/header`);
};
