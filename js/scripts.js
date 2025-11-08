// --- Game Data and Logic ---

// IMPORTANT: The rawQuestions array uses objects to hold the Portuguese text and an image URL.
const rawQuestions = [
    {
        text: "Esse Pokémon com certeza seria o Presidente do Brasil.",
        imageUrl: "./assets/img/presidentebrasil.png" /* Example: Custom image that I created */
    },
    {
        text: "Todo mundo chama esse Pokémon para assar as carnes do churrasco.",
        imageUrl: "./assets/img/churrasco.png"
    },
    {
        text: "Esse Pokémon não perde nenhum jogo do Flamengo.",
        imageUrl: "./assets/img/jogoflamengo.png"
    },
    {
        text: "Qual Pokémon seria o melhor motorista de Uber no Rio de Janeiro?",
        imageUrl: "./assets/img/uber.png"
    },
    {
        text: "O Pokémon que passaria o carnaval inteiro em Salvador.",
        imageUrl: "./assets/img/salvador.png"
    },
    {
        text: "Qual Pokémon conseguiria sobreviver ao trânsito de São Paulo?",
        imageUrl: "./assets/img/transitosp.png"
    },
    {
        text: "Esse Pokémon seria o melhor jogador de futebol da seleção brasileira.",
        imageUrl: "./assets/img/selecaobrasileira.png"
    },
    {
        text: "Qual Pokémon é o mais provável de aparecer na novela das nove?",
        imageUrl: "./assets/img/novela.png"
    },
    {
        text: "Que Pokémon daria o melhor garçom de uma padaria chique?",
        imageUrl: "./assets/img/padaria.png"
    },
    {
        text: "Esse Pokémon teria a melhor barraca de pastel na feira de domingo.",
        imageUrl: "./assets/img/feira.png"
    },
    {
        text: "Qual Pokémon seria o mestre de capoeira mais temido da Bahia?",
        imageUrl: "./assets/img/capoeira.png"
    },
    {
        text: "O Pokémon que só come feijoada no sábado.",
        imageUrl: "./assets/img/feijoada.png"
    },
    {
        text: "Esse Pokémon tentaria vender 'Jequiti' na porta de casa.",
        imageUrl: "./assets/img/jequiti.png"
    },
    {
        text: "Que Pokémon seria o DJ mais famoso do funk carioca?",
        imageUrl: "./assets/img/funk.png"
    },
    {
        text: "Esse Pokémon seria o melhor professor de português do ensino médio.",
        imageUrl: "./assets/img/professor.png"
    },
    {
        text: "Qual Pokémon comeria o maior açaí com leite ninho?",
        imageUrl: "./assets/img/acai.png"
    },
    {
        text: "O Pokémon que sempre pede desconto em tudo.",
        imageUrl: "./assets/img/desconto.png"
    },
    {
        text: "Qual Pokémon seria o melhor cantor de sertanejo universitário?",
        imageUrl: "./assets/img/sertanejo.png"
    },
    {
        text: "Esse Pokémon teria o melhor passinho de frevo em Olinda.",
        imageUrl: "./assets/img/frevo.png"
    },
    {
        text: "Qual Pokémon faria um protesto na Avenida Paulista?",
        imageUrl: "./assets/img/protesto.png"
    },
    /*{
        text: "O Pokémon que usa chinelo de dedo para ir a qualquer lugar, inclusive casamentos.",
        imageUrl: "https://placehold.co/200x200/4c4d51/ffffff?text=CHINELO"
    },*/
    {
        text: "Este Pokémon com certeza joga 'Bingo' no domingo.",
        imageUrl: "./assets/img/bingo.png"
    },
    {
        text: "Qual Pokémon adora assistir Fórmula 1, mas só o GP do Brasil?",
        imageUrl: "./assets/img/f1.png"
    },
    {
        text: "Esse Pokémon passaria horas preparando o chimarrão perfeito.",
        imageUrl: "./assets/img/chimarrao.png"
    },
    {
        text: "Qual Pokémon seria o melhor guia turístico nos Lençóis Maranhenses?",
        imageUrl: "./assets/img/lencois.png"
    },
    {
        text: "O Pokémon que mais sabe fazer 'gambiarras' em casa.",
        imageUrl: "./assets/img/gambiarra.png"
    }
];

let questionDeck = [];
let drawnQuestions = [];
let isDeckEmpty = false;

// Utility function to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the deck
function initializeDeck() {
    questionDeck = [...rawQuestions]; // Copy raw questions
    shuffleArray(questionDeck);
    drawnQuestions = [];
    isDeckEmpty = false;
    updateStatus();
}

// Update the status display
function updateStatus() {
    const statusElement = document.getElementById('deck-status');
    const buttonElement = document.getElementById('generate-button');
    const remaining = questionDeck.length;

    if (isDeckEmpty) {
        statusElement.textContent = "Deck Empty! Click to restart.";
        buttonElement.textContent = "Restart Game";
        buttonElement.classList.remove('bg-red-600', 'hover:bg-red-700');
        buttonElement.classList.add('bg-green-600', 'hover:bg-green-700');
    } else {
        statusElement.textContent = `Questions remaining: ${remaining}/${rawQuestions.length}`;
        buttonElement.textContent = "Next Question";
        buttonElement.classList.remove('bg-green-600', 'hover:bg-green-700');
        buttonElement.classList.add('bg-red-600', 'hover:bg-red-700');
    }
}

// Draw the next question
function drawNextQuestion() {
    const questionTextElement = document.getElementById('question-text');
    const questionImageElement = document.getElementById('question-image');
    const imageFrameElement = document.getElementById('image-frame');
    const cardElement = document.getElementById('question-card');
    const cardNameElement = document.getElementById('card-name');

    if (isDeckEmpty) {
        // If deck is empty, re-initialize and draw the first card
        initializeDeck();
    }

    if (questionDeck.length > 0) {
        // Draw the question object from the top of the shuffled deck
        const nextQuestion = questionDeck.pop();
        drawnQuestions.push(nextQuestion);

        // Update UI
        questionTextElement.textContent = nextQuestion.text;
        
        // Update Image
        questionImageElement.src = nextQuestion.imageUrl;
        imageFrameElement.classList.remove('opacity-0'); // Make image frame visible
        
        // Update the card name in the top bar with a short version of the question or a generic "Question"
        cardNameElement.textContent = "QUESTION"; // Could also be nextQuestion.text.substring(0, 15) + '...'
        
        // Card visual feedback (tap effect)
        cardElement.classList.add('scale-95'); 
        setTimeout(() => {
            cardElement.classList.remove('scale-95');
        }, 150);

        if (questionDeck.length === 0) {
            isDeckEmpty = true;
        }
    } else {
        // Deck End
        questionTextElement.textContent = "Deck End! Reload the page or click 'Restart Game'.";
        imageFrameElement.classList.add('opacity-0'); // Hide image frame
        cardNameElement.textContent = "END GAME";
        isDeckEmpty = true;
    }
    updateStatus();
}

// --- Event Listener Setup ---

document.addEventListener('DOMContentLoaded', () => {
    initializeDeck(); // Shuffle the deck on page load

    // Set the initial card message
    document.getElementById('question-text').textContent = "Click 'Next Question' to begin the battle!";
    document.getElementById('card-name').textContent = "BATTLE START";


    const generateButton = document.getElementById('generate-button');
    generateButton.addEventListener('click', drawNextQuestion);
});