const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const winSound = new Audio('Assets/ganhou.mp3'); 
const lostSound = new Audio('Assets/perdeu.mp3'); 
const tieSound = new Audio('Assets/empate.mp3');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const EMOJIS = ['✊', '✋', '✌️'];
const CHOICES = ['rock', 'paper', 'scissors'];


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};


const playMachine = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
};


const playRandom = () => {
    const resultElement = document.querySelector('.result');
    resultElement.innerHTML = 'Sorteando...';
    
    let count = 0;
    const interval = setInterval(() => {
        const randomEmoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        resultElement.innerHTML = randomEmoji;
        count++;
    }, 100);

    
    setTimeout(() => {
        clearInterval(interval);

        
        const humanChoice = CHOICES[Math.floor(Math.random() * 3)];
        const machineChoice = playMachine();

        playTheGame(humanChoice, machineChoice);
    }, 2000);
};


const playTheGame = (human, machine) => {
    console.log(`Humano: ${human} - Máquina: ${machine}`);

    if (human === machine) {
        result.innerHTML = `Empatou! 😐<br>${emojiFor(human)} = ${emojiFor(machine)}`;
        tieSound.play();
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = `Você ganhou! 🎉<br>${emojiFor(human)} vence ${emojiFor(machine)}`;
        winSound.play(); 
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = `Alexa ganhou! 🤖<br>${emojiFor(machine)} vence ${emojiFor(human)}`;
        lostSound.play();
    }
};


function emojiFor(choice) {
    if (choice === 'rock') return '✊';
    if (choice === 'paper') return '✋';
    if (choice === 'scissors') return '✌️';
}
