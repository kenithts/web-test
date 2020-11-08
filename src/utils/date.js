const addZero = (number) => (number < 10 ? `0${number}` : number);

export const unixToDate = (unixDate) => {
  const date = new Date(unixDate);
  return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`;
};

export const dateToUnix = () => '';
