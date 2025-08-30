document.addEventListener("DOMContentLoaded", function () {
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
  document.addEventListener("DOMContentLoaded", function() {
    displayRandomKindness();
  });
  
  const kindnessList = [
    "People, be beautiful to each other.",
    "It's time to read that book you've been meaning to pick up for so long.",
    "Smile, it suits you.",
    "Soon, dreams will begin to come true.",
    "Someone is looking up to you.",
    "You are understood, believe me.",
    "To some, you are that almond croissant.",
    "Someone misses you.",
    "If it's meant to be, it will happen.",
    "You will definitely see each other.",
    "Just ask and everything will become clear.",
    "What you want is now available.",
    "Accept your own incredible nature.",
    "Well, as always, you are unbeatable!",
    "Surround yourself with people who support you.",
    "Someone wants to be with you.",
    "It seems that someone likes you. But it's better to check ;)",
    "Work is work, but hugging is necessary too.",
    "Wow, it seems like today you will be talking to someone who likes you. Be careful.",
    "Chasing the impossible is madness.",
    "Life is short. Use the present time wisely and correctly.",
    "When it is clear to you that the answer is “no,” say so directly and without delay.",
    "It's not all about talking about what a person should be like, it's time to become that person.",        
    "No matter how much you want to, you cannot separate your life from humanity. You live in it, by it, and for it. We are all created to interact — like legs, arms, and eyes.",
    "It's perfectly normal to withdraw into yourself. But it's better not to.",
    "The meeting will take place soon.",
    "If you stray from the path, you can find a new one.",
    "Unexpected events will prevent the implementation of planned plans at this time.",
    "After a while, your desires or goals will lose their appeal, and new opportunities for creative growth will emerge.",
    "You need to devote more time to relaxation. Allow yourself to forget about your affairs for a while. This will help you find peace of mind and clarity of thought.",
    "You can expect profits and new favorable financial prospects.",
    "Success is unlikely at present; in the near future, you will need wisdom, restraint, and patience.",
    "Act persistently and confidently, and all the advantages will be on your side.",
    "Success awaits you, achieved easily and effortlessly. The result will surprise and delight you.",
    "New perspectives and new horizons will open up before you, previously invisible and unattainable.",
    "Keep yourself under control and don't let your emotions overwhelm you — this is the main condition for the successful completion of your plans.",
    "Fate likes to test those it favors from time to time. Your time has come.",
    "The situation is stable. You are on the right track. See your plans through to the end and take on new ones.",
    "Trust your heart and intuition more—they will show you the right path to your cherished goal.",
    "Changes will inevitably affect and perhaps even turn your life upside down. Upcoming events will help you start a new phase in your life. Internal disagreements will be overcome.",
    "Your matters will be resolved quickly and easily, without significant effort or expense on your part.",
    "Your plans are destined to come true if you don't shift your responsibility onto other people's shoulders.",
    "You are wasting a lot of energy and effort. Try to distribute your activities correctly.",
    "Look at your life as if from the outside—this will help you gain a true perspective on many things.",
    "Show restraint and self-control, as old conflicts will suddenly erupt.",
    "Your abilities and hard work will be appreciated. Opportunities for incentives, career growth, and profitable cooperation.",
    "Події розвиватимуться швидше, ніж ви очікуєте. Можливо, вони застануть вас зненацька",
    "Your wish will come true if you are modest enough in your demands.",
    "Perfect time to complete the most complex tasks",
    "Gain experience and knowledge to move forward. The best time to engage in self-improvement",
    "Ideas that existed only in your imagination will have a real chance of coming true.",
    "You are free to do whatever comes to mind. It's the right time for spontaneous actions.",    
    "Don't worry—everything will come at the right time. In the meantime, just go about your daily routine.",  
    "Focus on accumulating knowledge; at the moment, this is what you need most.",
    "Laughter prolongs life. Make the person next to you laugh.",   
    "A fun journey awaits you",        
    "Don't resist the new, life will change for the better",    
    "An exciting adventure awaits you",    
    "Just say “Yes!”",   
  ];
  
  function displayRandomKindness() {
    const kindnessDisplay = document.getElementById('kindness-display');
    const randomIndex = Math.floor(Math.random() * kindnessList.length);
    kindnessDisplay.textContent = kindnessList[randomIndex];
  }
