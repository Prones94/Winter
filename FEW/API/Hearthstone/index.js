/* eslint-disable  */

const getInfo = async () => {
  const path = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
  const promise = await fetch(path, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cfcdb43838mshd57b917e4c78e7ap1ad0e9jsna908b5dd857a',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  });
  const response = await promise.json();
  // eslint-disable-next-line no-console
  console.log(response.classes.length);
  const classes = response.classes;

};

getInfo();
