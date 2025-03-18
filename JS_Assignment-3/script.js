let quote = null;
let quoteTextHtml = document.querySelector(".quoteText");
let copyButton = document.querySelector(".copy-btn");
let cursor = document.querySelector(".cursor");
let allButtons = document.querySelectorAll(".btnAll");

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

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

allButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        cursor.style.width = "75px";
        cursor.style.height = "75px";
        cursor.style.border = "2px solid #fff";
    });

    btn.addEventListener("mouseleave", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.border = "10px solid #fff";
    });
});