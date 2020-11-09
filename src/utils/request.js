/* eslint-disable no-console */

const request = (url, options) => (
  new Promise((resolve) => {
    const pool = setInterval(() => {
      fetch(url, options)
        .then((response) => {
          clearInterval(pool);
          resolve(response.json());
        })
        .catch((e) => {
          console.error(e);
        });
    }, 2000);
  })

);

export default request;
