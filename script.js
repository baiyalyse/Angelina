const compliments = [
    "Твоя энергия заразительна, как чистое счастье🌸",
    "С тобой даже молчание уютное 🫂",
    "С тобой легко быть собой — и это редкость🌺",
    "С тобой уютно, как с пледом и чаем под дождь💫",
    "Ты одна из тех, о ком вспоминаешь с улыбкой🙃",
    "Ты — звезда, которая светит под именем солнышко☀️",
    "Ты — как вдохновение на рассвете🌅",
    "Есть люди солнечные — ты одна из них✨",
    "Ты вдохновляешь быть лучше просто тем, что ты есть 😽",
    "Ты вдохновляешь просто тем, что остаёшься собой😄",
    "Ты — прекрасна ❤️",
    "Ты такая настоящая😊",
    "Ты умничка😉",
    "Ты — буквально нур🌟",
    "Ты знаешь, как поддержать, когда это нужно больше всего🤗",
    "Ты умеешь утешить просто своим присутствием🤭",
    "В тебе есть стремление, которое видно даже без слов🙂",
    "Ты умеешь говорить так тепло, что хочется слушать😚",
    "Я восхищаюсь твоим эмоциональным интеллектом🤩",
    "Умничка — слишком простое слово, чтобы описать тебя😆",
    "Ты всегда находишь нужные слова💐",
    "С тобой молчать — не менее приятно, чем говорить🌼",
    "Слушать тебя — как читать хорошую книгу: интересно, по-настоящему🌠",
    "Слушая твои истории, мне кажется, что и у меня всё получится💗",
    "Ты радуешь не только глаз — ты радуешь душу❤️‍🩹",
    "Ты такая, после общения с которой остаётся свет❣️",
    "Твоя милота вообще без границ🤧",
    "У тебя потрясающий вкус😍",
    "Твоя улыбка — яркая как солнце ☀️",
    "В тебе столько света — тени сами исчезают 🤭",
    "Твоя улыбка — как свет от звёзд😻",
    "Ты светишь так, что даже луна старается не отставать😼",
    "Ты сияешь не чтобы тебя заметили — а потому что ты такая😸",
    "Ты — редкое сочетание скромности и яркости👀",
    "Ты как рассвет — каждый раз прекрасна по-новому😝",
    "В тебе и внешность красивая, и присутствие светлое😁",
    "Глубина в твоих глазах — как море, в которое хочется нырнуть😜",
    "Ты не просто красива — ты настоящая красота☺️",
    "Ангелина, в тебе есть тот свет, которого не хватает в этом мире🫶🏻",
];


const btn = document.getElementById('showBtn');
const container = document.getElementById('complimentsContainer');
const wishSection = document.getElementById('wishSection');

let index = 0;
let leftSide = true;

btn.addEventListener('click', () => {
    btn.disabled = true; // блокируем кнопку после нажатия
    document.getElementById("bgMusic").play();
    showCompliments();
});

function showCompliments() {
    if(index >= compliments.length) {
        // После всех комплиментов — показываем пожелание с плавным скроллом
        wishSection.classList.add('visible');
        wishSection.scrollIntoView({behavior: 'smooth'});
        showFloatingHearts();
        return;
    }

    const div = document.createElement('div');
    div.className = 'compliment ' + (leftSide ? 'left' : 'right');
    div.textContent = compliments[index];
    container.appendChild(div);

    // Запускаем анимацию появления (css transition)
    requestAnimationFrame(() => {
        div.style.opacity = '1';
        div.style.transform = 'translateY(0)';
    });

    // Автоскролл вниз, чтобы виден был последний блок
    div.scrollIntoView({behavior: 'smooth', block: 'end'});

    leftSide = !leftSide; // меняем сторону (асимметрия)

    index++;
    setTimeout(showCompliments, 1000); // следующий комплимент через 1.0с
    }

    // Эффект плавающих сердечек
    function showFloatingHearts() {
    const heartCount = 12;
    for(let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️‍🩹';
        heart.style.position = 'fixed';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = '100vh';
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;
        heart.style.opacity = 0.8;
        heart.style.pointerEvents = 'none';
        heart.style.userSelect = 'none';
        heart.style.transition = 'transform 3s ease, opacity 3s ease';
        document.body.appendChild(heart);

        setTimeout(() => {
        heart.style.transform = `translateY(-120vh) translateX(${(Math.random() - 0.5) * 100}px)`;
        heart.style.opacity = '0';
        }, 50);

        setTimeout(() => heart.remove(), 3050);
    }
    }
