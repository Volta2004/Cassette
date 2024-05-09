const COUNT = 200;

const SIZES = [
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--s',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--m',
    'rainDrop--l',
    'rainDrop--l',
];

const EMOJIS = [
    '💿',
    '💿',
    '💿',
    '💿',
    '📀',
    '📀',
    '📀',
    '🎶',
    '🎶',
    '🎶',
];


const rainContainer = document.querySelector('.rain-container');

const genRainDrop = (size, xStart, xEnd, yStart, emoji) => {
    const myEmoji = document.createElement('div');
    myEmoji.innerText = emoji;
    myEmoji.classList.add('rainDrop', size);
    myEmoji.style.setProperty('--x-start', xStart + 'vw');
    myEmoji.style.setProperty('--x-end', xEnd + 'vw');
    myEmoji.style.setProperty('--y-start', yStart + 'vw');
    myEmoji.style.setProperty('--y-end', yStart + 'vw');
    return myEmoji;
}

for (Let i = 0; i < COUNT; i++) {
    const size = randFromList(SIZES);
    const xStart = getRandom(0, 100);
    const xEnd = getRandom(xStart - 20, xStart + 20);
    const yStart = getRandom(-100, 0);
    const emoji = randFromList(EMOJIS);
    rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji));

}

function randFromList(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;

}