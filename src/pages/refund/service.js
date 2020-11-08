// import request from 'utils/request';
// import config from 'config/config.json';
import timeline from 'config/timeline.json';
import sidebar from 'config/sidebar.json';
import header from 'config/header.json';

export const getHeader = () => header;
// export const getHeader = () => request(`${config.API_URL}/header`);

export const getTimeline = () => timeline;

export const getSidebar = () => sidebar;
