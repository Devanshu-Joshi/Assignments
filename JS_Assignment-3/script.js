let quote = null;

let quotePromise = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");

quotePromise.then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

