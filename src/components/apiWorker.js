const apiURL = 'https://api.exchangeratesapi.io/latest' +
  '?base=USD&symbols=USD,EUR,RUB';

function GetRatesTable() {
  return DoRequest(apiURL).then((res) => {
    return res.rates;
  });
}

function DoRequest(url) {
  return fetch(url).then((response) => {
    return response.json();
  }).catch((e) => {
    console.log('Data fetch error:', e);
  });
}

export {
  GetRatesTable,
};
