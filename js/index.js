function randomQuote() {
  var quotes = [
    {
      author: "― Oscar Wilde",
      quote: "“Be yourself; everyone else is already taken.”",
    },
    {
      author: "― Marilyn Monroe",
      quote:
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    },
    {
      author: "― Frank Zappa",
      quote: "“So many books, so little time.”",
    },
    {
      author: "― Albert Einstein",
      quote:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    },
    {
      author: "― Bernard M. Baruch",
      quote:
        "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    },
    {
      author: "― Mae West",
      quote: "“You only live once, but if you do it right, once is enough.”",
    },
    {
      author: "― J.K. Rowling",
      quote:
        "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    },
  ];
  var x = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = `${quotes[x].quote}`;
  document.getElementById("author").innerHTML = `${quotes[x].author}`;
}
