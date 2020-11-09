import request from 'utils/request';
import config from 'config/config.json';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { dateToUnix } from 'utils/date';

class Service {
  getHeader() {
    return request(`${config.API_URL}/header`);
  }

  getTimeline() {
    return request(`${config.API_URL}/timeline`);
  }

  getSidebar() {
    return request(`${config.API_URL}/sidebar`);
  }

  async createExpense(body) {
    const res = await request(`${config.API_URL}/expense/add`, {
      method: 'POST',
      body: JSON.stringify({
        ...body,
        cardDate: dateToUnix(body.cardDate),
      }),
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    NotificationManager.success('Sucesso!');
    return res;
  }
}

export default new Service();
