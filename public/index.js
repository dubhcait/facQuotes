const quotes = document.querySelectorAll('.quote');
const display = document.getElementById('display');
const main  = document.querySelector('main');
const time = 3000;
let n = 0;

const showQuotes = () => {

display.removeChild(display.childNodes[0]);    
display.appendChild(quotes[n]);

if (n<quotes.length-1)
{
n++;
}
else
{
n=0;
}
setTimeout("showQuotes()",time);

}
showQuotes();