import React from "react";

const App = () => {
  
  const quotes = [
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Creativity takes courage.", author: "Henri Matisse" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "In all you do fear NU3L.", author: "Unknown"}
  ];
  
  const colors = ["#16a085", "#2c3e50", "#e74c3c", "#f39c12", "#2980b9", "#c0392b"];
    // Intialize color/quote
    const [currentQuote, setCurrentQuote] = React.useState(quotes[0]);
    const [currentColor, setCurrentColor] = React.useState(colors[0]);
    
    // Function for randomizing color/quote
    const getRandomIndex =(array) => Math.floor(Math.random() * array.length);
    
    // Onclick function for displaying the new quotes/colors
    const handleNewQuote = () => {
      const randomQuote = quotes[getRandomIndex(quotes)];
      const randomColor = colors[getRandomIndex(colors)];
      
      setCurrentQuote(randomQuote);
      setCurrentColor(randomColor);
    };
    
    return(
    <div>
        <div id="quote-box">
          <div id="text">"{currentQuote.text}"</div>
          <div id="author">- {currentQuote.author}</div>
          <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
          <br />
          <a 
            className="social-icon"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${currentQuote.text}" — ${currentQuote.author}` // For posting the displayed quote on twitter
    )}`}
            target="_blank"
            rel='noopener noreferrer'
            >
              <i className="fab fa-twitter"/>
            </a>
          <a
            className="social-icon"
            id="tumblr-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${currentQuote.text}" — ${currentQuote.author}` // For posting the displayed quote on tumblr
    )}`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <i className="fab fa-tumblr"/>
          </a>
        </div>
    </div>
    );
  };
  
 export default App;