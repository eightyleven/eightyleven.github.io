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
  "День буде вдалий в усіх відношеннях. Ви зможете істотно просунутися на роботі, а в особистому житті пануватиме гармонія",
  "Скоро з'являться нові друзі. Самотність вам не загрожує",
  "Розкрийтеся та пропустіть світло в ту частину свого життя, яка досі була втаємниченою",
  "Вам, нарешті, вдасться відімкнути заржавілий замок",
  "Поодинці вам не впоратися з вашими проблемами",
  "Настав час спробувати щось нове",
  "Людина ніколи не стара щоб вчитися. Нові знання принесуть вам успіх",
  "Якщо не хочете серйозних потрясінь, проаналізуйте ваше ставлення до власної особистості",
  "Розкрийтеся та пропустіть світло в ту частину свого життя, яка досі була втаємниченою",
  "Виконання заповітного бажання вже близько",
  "Секрет успішного просування - це початок",
  "Вам варто трохи почекати, і майбутнє принесе вам велику радість",
  "Уважніше ставтеся до знаків долі",
  "Зовсім скоро у вас з’явиться людина, яка буде шалено вас цінувати",
  "Ви відчуваєте порожнечу, і ваше серце заполонив холод, який зможе розтопити тільки людина старше вас",
  "Зовсім скоро ви зможете з задоволенням витрачати гроші, а також із задоволенням їх заробляти",
  "Через вашу індивідуальність і чарівність, ви завжди будете досягати, чого хочете",
  "Скоро ви потрапите в печеру з скарбами. Однак не втрачайте голову: візьміть рівно стільки, скільки вам необхідно, решту залиште для інших",
  "Якщо чогось дійсно хочеш, то весь всесвіт сприятиме виконанню бажання",
  "Потрібно мати, на що опертися, і мати певність, що є куди повертатися. Раніше з цим було простіше",
  "Тебе ніхто не штовхатиме. Не робиш, то й не робиш: будеш мати маленьку зарплату і нецікаву роботу",
  "Коли вам очевидно, що відповідь «ні», скажіть про це прямо й без зволікання",
  "Завжди можна створити щось своє. Головне — бажання та ідеї. Тоді все вдасться",        
  "Ніхто не каже, що результат повинен бути миттєвим",
  "Сьогодні Ви відчуєте спокій і гармонію, яку так довго шукали",
  "Посмішка – це Ваша перепустка у серця інших, посміхайтеся частіше – це Вам личить",
  "Випадкова зустріч відкриє двері до нової дружби та успіху",
  "Несподівані події завадять в даний момент виконанню намічених планів",
  "Через деякий час ваші бажання або цілі втратять для вас інтерес і з'являться нові можливості для творчого зростання",
  "Вам потрібно більше приділяти час для відпочинку. Дозвольте собі на якийсь час забути про справи. Це допоможе вам знайти душевний спокій і ясність думки",
  "Вас очікує прибуток, з'являться нові хороші матеріальні перспективи",
  "Успіх зараз малоймовірний, найближчим часом від вас будуть потрібні мудрість, витримка, терпіння",
  "Дійте наполегливо, впевнено, і всі переваги будуть на вашому боці",
  "Вас чекає успіх, набутий легко і без зусиль. Результат вас здивує і порадує",
  "Перед вами відкриються нові перспективи і нові горизонти, перш невидимі і недосяжні",
  "Тримайте себе в руках і не дозволяйте емоціям захлеснути вас - це головна умова благополучного завершення планів",
  "Доля любить час від часу влаштовувати випробування тим, кому вона протегує. Настав ваш час",
  "Ситуація стабільна. Ви на правильному шляху. Доведіть свої плани до кінця і беріться за нові",
  "Більше довіряйте своєму серцю і інтуїції - вони підкажуть вам потрібні шляху до заповітної мети",
  "Зміни неминуче торкнуться, а може, і перевернуть ваше життя. Прийдешні події допоможуть розпочати новий етап життя. Внутрішні розбіжності будуть подолані",
  "Ваші справи будуть вирішуватися легко і швидко, без великих зусиль і витрат з вашого боку",
  "Вашим планам судилося збутися, якщо ви не будете перекладати свою відповідальність на чужі плечі",
  "Ви витрачаєте багато енергії і сил даремно. Постарайтеся правильно розподіляти свою активність",
  "Погляньте на своє життя як би з боку - завдяки цьому ви знайдете вірний погляд на багато речей",
  "Проявіть витримку і самовладання, оскільки старі суперечності раптово вирвуться назовні",
  "Ваші здібності і працьовитість будуть оцінені по достоїнству. Можливість заохочення, кар'єрного росту і вигідного співробітництва",
  "Події розвиватимуться швидше, ніж ви очікуєте. Можливо, вони застануть вас зненацька",
  "Бажання здійсниться, якщо ви будете досить скромні у своїх вимогах",
  "Потрібний час для реалізації найбільш складних завдань",
  "Накопичуйте досвід і знання для просування вперед. Найбільш вдалий час зайнятися самовдосконаленням",
  "Ідеї, що існували лише у вашій уяві, отримають реальний шанс на здійснення",
  "Ви вільні робити все, що прийде вам в голову. Відповідний час для спонтанних дій",    
  "Будьте спокійні - все прийде в потрібний момент. А поки займайтеся побутовими, повсякденними справами",  
  "Займіться накопиченням знань, в даний момент це потрібно вам найбільше",
  "Сміх подовжує життя. Розсміши людину поряд з тобою",   
  "На тебе чекає весела подорож",        
  "Не чиніть опір новому, життя зміниться в кращу сторону",    
  "Вас чекає цікава пригода",    
  "Просто скажіть «Так!»",   
];

function displayRandomKindness() {
  const kindnessDisplay = document.getElementById('kindness-display');
  const randomIndex = Math.floor(Math.random() * kindnessList.length);
  kindnessDisplay.textContent = kindnessList[randomIndex];
}