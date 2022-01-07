// GLOBAL VARIABLES

const quote = document.querySelector(".quote");
const newQuote = document.querySelector(".btn");

const quotes = [
  { quote: "Life is like a box of chocolates, you never know what you're gonna get.", author: "Forrest Gump" },
  { quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  { quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { quote: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
  { quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  { quote: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { quote: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
  { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
  { quote: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
];

// EVENT LISTENERS

newQuote.addEventListener("click", function () {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = `<p class="quote">${randomQuote.quote}</p>
                     <p class="author">${randomQuote.author}</p>`;
});