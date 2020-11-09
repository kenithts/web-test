import request from 'utils/request';
import config from 'config/config.json';
import timeline from 'config/timeline.json';
import sidebar from 'config/sidebar.json';
import header from 'config/header.json';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export const getHeader = () => header;
// export const getHeader = () => request(`${config.API_URL}/header`);

export const getTimeline = () => timeline;

export const getSidebar = () => sidebar;

export const createExpense = async (body) => {
  await request(`${config.API_URL}/expense/add`, {
    method: 'POST',
    body: JSON.stringify(body),
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  NotificationManager.success('Sucesso!');
};
