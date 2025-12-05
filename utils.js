/**
 * Utility functions for the game
 */

/**
 * Get a random integer between min (inclusive) and max (exclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Get a random word pair (one valid, one invalid)
 * Uses the same index for both arrays (e.g., 3rd valid word pairs with 3rd invalid word)
 * @returns {Object} Object with valid and invalid words
 */
function getRandomWordPair() {
    // Use the same index for both valid and invalid arrays
    // Ensure we don't exceed the length of the shorter array
    const maxLength = Math.min(WORDS_DATA.valid.length, WORDS_DATA.invalid.length);
    const index = getRandomInt(0, maxLength);
    
    return {
        valid: WORDS_DATA.valid[index],
        invalid: WORDS_DATA.invalid[index]
    };
}

/**
 * Convert number to Nepali numerals
 * @param {number} num - Number to convert
 * @returns {string} Nepali numeral string
 */
function toNepaliNumeral(num) {
    const nepaliNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    
    if (num === 0) return nepaliNumerals[0];
    
    let result = '';
    while (num > 0) {
        result = nepaliNumerals[num % 10] + result;
        num = Math.floor(num / 10);
    }
    
    return result;
}

