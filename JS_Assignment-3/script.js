let quote = null;
let author = null;
let quoteTextHtml = document.querySelector(".quoteText");
let authorTextHtml = document.querySelector(".quoteAuthor");
let copyButton = document.querySelector(".copy-btn");
let refreshButton = document.querySelector(".btnRefresh");
let cursor = document.querySelector(".cursor");
let allButtons = document.querySelectorAll(".btnAll");
let btnTwitter = document.querySelector(".btnTwitter");

function fetchQuote() {
    quoteTextHtml.innerText = "Quote is loading...";
    authorTextHtml.innerText = "- Author";

    let quotePromise = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");

    quotePromise.then(res => res.json())
        .then(data => data.data)
        .then(dataContent => {
            console.log(dataContent);
            this.quote = dataContent.content;
            this.author = dataContent.author;
            quoteTextHtml.innerText = this.quote;
            authorTextHtml.innerText = "- " + this.author;
        })
        .catch(error => console.error(error));

}

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(this.quote);
    copyButton.innerText = "COPIED";
    setTimeout(() => {
        copyButton.innerText = "COPY";
    }, 2000);
})

btnTwitter.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=" + this.quote + " - " + this.author, "_blank");
});

fetchQuote();

refreshButton.addEventListener("click", () => { fetchQuote() });

if (window.innerWidth > 600) {
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
}