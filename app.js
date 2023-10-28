let buttonElement = document.getElementById('new-quote-button');
let quoteElement = document.getElementById('quote');
let authorElement = document.getElementById('author');



let getRandomQuote = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let printQuote = () => {
let randomQuote = getRandomQuote(quotes.length, 0);
quoteElement.innerText = quotes[randomQuote].texto;
authorElement.innerText = quotes[randomQuote].autor;


};

printQuote();

buttonElement.addEventListener('click', printQuote);

