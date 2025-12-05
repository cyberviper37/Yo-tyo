/**
 * UI helper functions for DOM manipulation using jQuery
 */

/**
 * Show a screen and hide others
 * @param {string} screenId - ID of the screen to show
 */
function showScreen(screenId) {
    $('.screen').addClass('hidden');
    $('#' + screenId).removeClass('hidden');
}

/**
 * Update the score display
 * @param {number} score - Current score
 */
function updateScore(score) {
    $('#score').text(toNepaliNumeral(score));
}

/**
 * Render word options as clickable buttons
 * @param {Array} words - Array of word objects with text and isCorrect properties
 */
function renderOptions(words) {
    const $container = $('#word-options');
    $container.empty();
    
    // Shuffle words for random positioning
    const shuffledWords = shuffleArray(words);
    
    shuffledWords.forEach(function(wordObj) {
        const $button = $('<button>')
            .addClass('word-button')
            .text(wordObj.text)
            .data('isCorrect', wordObj.isCorrect)
            .data('word', wordObj.text);
        
        $container.append($button);
    });
}

/**
 * Highlight a word button as correct
 * @param {string} word - The word text to highlight
 */
function highlightCorrect(word) {
    $('.word-button').each(function() {
        if ($(this).data('word') === word) {
            $(this).addClass('correct');
        }
    });
}

/**
 * Highlight a word button as incorrect
 * @param {string} word - The word text to highlight
 */
function highlightIncorrect(word) {
    $('.word-button').each(function() {
        if ($(this).data('word') === word) {
            $(this).addClass('incorrect');
        }
    });
}

/**
 * Disable all word buttons
 */
function disableWordButtons() {
    $('.word-button').addClass('disabled');
}

/**
 * Show the Next button
 */
function showNextButton() {
    $('#next-btn').removeClass('hidden');
    $('#start-again-btn').addClass('hidden');
}

/**
 * Hide the Next button
 */
function hideNextButton() {
    $('#next-btn').addClass('hidden');
}

/**
 * Show the Start Again button
 */
function showStartAgainButton() {
    $('#start-again-btn').removeClass('hidden');
    $('#next-btn').addClass('hidden');
}

/**
 * Hide the Start Again button
 */
function hideStartAgainButton() {
    $('#start-again-btn').addClass('hidden');
}

/**
 * Reset word buttons to initial state
 */
function resetWordButtons() {
    $('.word-button').removeClass('correct incorrect disabled');
}

