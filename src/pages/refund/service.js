import request from 'utils/request';
import config from 'config/config.json';
import timeline from 'config/timeline.json';

export const getHeader = () => request(`${config.API_URL}/header`);

export const getTimeline = () => timeline;
