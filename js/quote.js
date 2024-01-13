document.addEventListener("DOMContentLoaded", function () {
  // Retrieve stored quote from localStorage
  const storedQuote = localStorage.getItem('stoicQuote');

  // Array of stoic quotes
  const stoicQuotes = [
      "The best revenge is to be unlike him who performed the injustice.",
      "It is not that we have a short time to live, but that we waste much of it.",
      "He who fears death will never do anything worth of a man who is alive.",
      // Add more quotes as needed
  ];

  // Function to get a random quote
  function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * stoicQuotes.length);
      return stoicQuotes[randomIndex];
  }

  // Determine the quote to display
  const quoteToShow = storedQuote || getRandomQuote();

  // Display the stoic quote
  document.getElementById("stoicQuote").innerText = quoteToShow;

  // Save the quote to localStorage
  localStorage.setItem('stoicQuote', quoteToShow);
});

// Redirect to index.html on page refresh
if (performance.navigation.type == 1) {
  window.location.href = "index.html";
}