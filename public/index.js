const quotes = document.querySelectorAll('.quote')
let display = document.getElementById('display')

display.appendChild(quotes[3]);

console.log(quotes[2].childNodes[0])


// document.addEventListener('keydown', function(event) {
//     var ekey = event.keyCode
//     if( 37 === ekey ) {
//       pauseQuote();
//     previousQuote();
//     } 
//   if ( 39 === ekey ) {
//        // right arrow
//     pauseQuote();
//     nextQuote();
//     }});

// var quotes = document.querySelectorAll('#Quotes .Quote');
// var currentQuote = 0;
// var QuoteInterval = setInterval(nextQuote,2000);

// function nextQuote() {
//     goToQuote(currentQuote+1);
// }

// function previousQuote() {
//     goToQuote(currentQuote-1);
// }

// function goToQuote(n) {
//     quotes[currentQuote].className = 'Quote';
//     currentQuote = (n+Quotes.length)%Quotes.length;
//     quotes[currentQuote].className = 'Quote showing';
// }

// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseQuote() {
//     pauseButton.textContent = '&#9658';
//     playing = false;
//     clearInterval(QuoteInterval);
// }

// function playQuoteshow() {
//     pauseButton.textContent = '||';
//     playing = true;
//     QuoteInterval = setInterval(nextQuote,2000);
// }

// pauseButton.onclick = function() {
//     if(playing) {
//     pauseQuote();
//   } else {
//     playQuoteshow();
//   }
// };

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// next.onclick = function() {
//     pauseQuote();
//     nextQuote();
// };
// previous.onclick = function() {
//     pauseQuote();
//     previousQuote();
// };





