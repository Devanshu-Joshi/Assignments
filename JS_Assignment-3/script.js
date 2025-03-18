let quote = null;
let quoteTextHtml = document.querySelector(".quoteText");

let quotePromise = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");

quotePromise.then(res => res.json())
    .then(data => data.data.content)
    .then(quote => {
        this.quote = quote;
        quoteTextHtml.innerText = this.quote;
        // document.write(this.quote);
    })
    .catch(error => console.error(error));