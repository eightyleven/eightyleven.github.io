let remainingAttempts = 3;

function showStoicQuote() {
    // Retrieve stored timestamps from localStorage
    const clickTimestamps = JSON.parse(localStorage.getItem('clickTimestamps')) || [];

    // Check if the user has exceeded the allowed attempts within the last 24 hours
    const currentTime = new Date().getTime();
    const last24Hours = 24 * 60 * 60 * 1000;
    const recentClicks = clickTimestamps.filter(timestamp => currentTime - timestamp < last24Hours);

    if (recentClicks.length < remainingAttempts) {
        // Store the current timestamp
        clickTimestamps.push(currentTime);
        localStorage.setItem('clickTimestamps', JSON.stringify(clickTimestamps));

        // Redirect to quote.html
        window.location.href = "quote.html";
    } else {
        alert("You've exceeded the maximum attempts within the last 24 hours.");
    }
}