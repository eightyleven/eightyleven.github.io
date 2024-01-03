document.addEventListener("DOMContentLoaded", function() {
    displayRandomKindness();
  });
  
  const kindnessList = [
    "Кто прочитал, тот лох.",
    "Тест2.",
    "You have a beautiful soul.",
    "Believe in yourself. You can do great things.",
    "Smile, you're amazing!",
    "You make the world a better place."
  ];
  
  function displayRandomKindness() {
    const kindnessDisplay = document.getElementById('kindness-display');
    const randomIndex = Math.floor(Math.random() * kindnessList.length);
    kindnessDisplay.textContent = kindnessList[randomIndex];
  }