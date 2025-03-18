let quote = null;
let quoteTextHtml = document.querySelector(".quoteText");
let copyButton = document.querySelector(".copy-btn");

let quotePromise = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");

quotePromise.then(res => res.json())
    .then(data => data.data.content)
    .then(quote => {
        this.quote = quote;
        quoteTextHtml.innerText = this.quote;
        // document.write(this.quote);
    })
    .catch(error => console.error(error));

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(this.quote);
    copyButton.innerText = "COPIED";
    setTimeout(() => {
        copyButton.innerText = "COPY";
    }, 2000);
})