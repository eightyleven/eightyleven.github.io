// Define an array of poems
const poems = [
    `<p>За хвилину до того, як випаде дощ,<br>
    ти відчуєш, як шкіра вібрує під тиском<br>
    ще не випалих крапель, що ляжуть уздовж<br>
    твого тіла і враз його стиснуть.</p>
    <br>
    <p>Так легкі голуби, на вулицях кинуті,<br>
    відчувають смак їжі за мить до годівлі,<br>
    так солдат, що за хвилю повинен загинути,<br>
    відчува деформації у власному тілі.</p>
    <br>
    <p>Сміх, що має до мене назавтра прийти,<br>
    розпізнаю сьогодні поміж плачу я.<br>
    За хвилину до того, як з’явишся ти,</p>
    <br>
    <p>Сергій Жадан</p>`,

    `<p>Що я для тебе маю?<br>
    Серце! Руки! Уста!<br>
    Так, моя сумноока,<br>
    Так, моя золота.</p>
    <br>
    <p>Руками тебе обгорну,<br>
    Поцілунками обів’ю,<br>
    А серце! А в серце своє<br>
    Заховаю печаль твою.</p>`,

    // Add more poems as needed
];
if (performance.navigation.type == 1) {
    window.location.href = "index.html";
}
// Function to update the displayed poem
function updatePoem() {
    // Get today's date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const todayDate = mm + '/' + dd + '/' + yyyy;

    // Use the date to determine which poem to display
    const poemIndex = parseInt(todayDate.replace(/\//g, '')) % poems.length;
    const poemOfDay = poems[poemIndex];

    // Display the poem on the page
    document.getElementById('poem-container').innerHTML = poemOfDay;
}

// Call updatePoem initially to display the poem when the page loads
updatePoem();

// Update the poem every 24 hours
setInterval(updatePoem, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
