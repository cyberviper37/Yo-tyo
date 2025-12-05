/**
 * Main game logic and flow control
 */

// Game state
let gameState = {
    score: 0,
    currentWords: null,
    gameEnded: false
};

/**
 * Load next word pair and prepare for display
 */
function loadNextWords() {
    const wordPair = getRandomWordPair();
    
    gameState.currentWords = [
        { text: wordPair.valid, isCorrect: true },
        { text: wordPair.invalid, isCorrect: false }
    ];
    
    renderOptions(gameState.currentWords);
    resetWordButtons();
    hideNextButton();
    hideStartAgainButton();
}

/**
 * Handle word selection
 * @param {string} selectedWord - The word that was clicked
 * @param {boolean} isCorrect - Whether the selection is correct
 */
function handleSelection(selectedWord, isCorrect) {
    // Disable all buttons to prevent further clicks
    disableWordButtons();
    
    if (isCorrect) {
        // Correct selection
        highlightCorrect(selectedWord);
        gameState.score += 1;
        updateScore(gameState.score);
        showNextButton();
    } else {
        // Wrong selection - game over
        highlightIncorrect(selectedWord);
        gameState.gameEnded = true;
        showStartAgainButton();
    }
}

/**
 * Reset game state and return to first question
 */
function resetGame() {
    gameState.score = 0;
    gameState.gameEnded = false;
    gameState.currentWords = null;
    
    updateScore(0);
    loadNextWords();
}

/**
 * Initialize game event handlers
 */
function initGame() {
    // Start button click handler
    $('#start-btn').on('click', function() {
        showScreen('game-screen');
        resetGame();
    });
    
    // Word button click handler (using event delegation)
    $(document).on('click', '.word-button:not(.disabled)', function() {
        if (gameState.gameEnded) {
            return;
        }
        
        const $button = $(this);
        const isCorrect = $button.data('isCorrect');
        const word = $button.data('word');
        
        handleSelection(word, isCorrect);
    });
    
    // Next button click handler
    $('#next-btn').on('click', function() {
        if (!gameState.gameEnded) {
            loadNextWords();
        }
    });
    
    // Start Again button click handler
    $('#start-again-btn').on('click', function() {
        resetGame();
    });
}

// Initialize game when DOM is ready
$(document).ready(function() {
    initGame();
});

