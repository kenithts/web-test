import Action from './components/Action';
import Icon from './components/Icon';
import Receipt from './components/Receipt';
import Status from './components/Status';
import Value from './components/Value';
import Date from './components/Date';

const ITEM_TYPES = {
  EXPENSE: {
    icon: 'money-check-alt',
    classNameIcon: 'timeline-list__item--expense',
    columns: [Icon, Action, Value, Status, Receipt],
  },
  EVALUATION: {
    icon: 'users',
    classNameIcon: 'timeline-list__item--evaluation',
    columns: [Icon, Action, Status, Date],
    label: 'evaluation',
  },
  ACCOUNTABILITY_SUBMITTED: {
    icon: 'asterisk',
    classNameIcon: 'timeline-list__item--account',
    columns: [Icon, Action],
    label: 'submitted',
  },
  ACCOUNTABILITY_CREATED: {
    icon: 'asterisk',
    classNameIcon: 'timeline-list__item--account',
    columns: [Icon, Action],
    label: 'created',
  },
};

export default ITEM_TYPES;
