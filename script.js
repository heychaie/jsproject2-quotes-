const quotes = [
    {
        name:'Imam Ali r.a., continued by Albert Einstein',
        quote:'Knowledge is power, but only when it is applied'
    },
    {
        name:'Albert Einstein',
        quote:'God does not play dice with the universe'
    },
    {
        name:'Robert Greene; The 48 laws of Power',
        quote:'Crush your enemies totally'
    },
    {
        name:'Dr. Zakir Naik; quoting about the glorious Quran',
        quote:'It is not a book of science, it is a book of signs'
    },
    {
        name:'Ron Swanson; Parks and Recreation',
        quote:'There has never been a sadness that cannot be cured by breakfast food'
    }


]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;


}