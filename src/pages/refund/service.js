import request from 'utils/request';
import config from 'config/config.json';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export const getHeader = () => request(`${config.API_URL}/header`);

export const getTimeline = () => request(`${config.API_URL}/timeline`);

export const getSidebar = () => request(`${config.API_URL}/sidebar`);

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
