const quotes = [
    {
        name:"name1, name1",
        quote:"quote1 quote1 quote1 quote1"
    },
    {
        name:"name2, name2",
        quote:"quote2 quote2 quote2 quote2"
    },
    {
        name:"name3, name3",
        quote:"quote3 quote3 quote3 quote3"
    },
]

const quateBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quateBtn.addEventListener('click', displayQuaote);

function displayQuaote (){
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[number].quote
    quoteAuthor.innerHTML = quotes[number].name
}