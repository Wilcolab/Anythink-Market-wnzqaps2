/**
 * Converts a space- or underscore-separated string to camelCase.
 * - Lowercases the first word; capitalizes subsequent words.
 * - Trims whitespace.
 * - Throws TypeError for null/undefined/non-string input.
 * - Throws TypeError if input contains numbers or symbols.
 * 
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input.
 * @throws {TypeError} If input is not a valid string.
 */

/**
 * Converts a space- or underscore-separated string to dot.case.
 *
 * This function transforms the input string by:
 * - Trimming leading and trailing whitespace.
 * - Validating that the input is a non-null, non-undefined string containing only letters (a-z, A-Z), spaces, or underscores.
 * - Splitting the string into words using spaces or underscores as delimiters.
 * - Lowercasing all words.
 * - Joining the words with dots ('.') to form the final dot.case string.
 *
 * @function DotCase
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If the input is not a string, is null/undefined, or contains characters other than letters, spaces, or underscores.
 *
 * @example
 * DotCase('dot case'); // returns 'dot.case'
 * DotCase('hello_world again'); // returns 'hello.world.again'
 * DotCase('SINGLE'); // returns 'single'
 * DotCase('   '); // returns ''
 */

/**
 * Converts a space- or underscore-separated string to camelCase.
 *
 * This function transforms the input string by:
 * - Trimming leading and trailing whitespace.
 * - Validating that the input is a non-null, non-undefined string containing only letters (a-z, A-Z), spaces, or underscores.
 * - Splitting the string into words using spaces or underscores as delimiters.
 * - Lowercasing all words.
 * - Lowercasing the first word and capitalizing the first letter of each subsequent word.
 * - Concatenating the words to form the final camelCase string.
 *
 * @function CamelCase
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If the input is not a string, is null/undefined, or contains characters other than letters, spaces, or underscores.
 *
 * @example
 * CamelCase('camel case'); // returns 'camelCase'
 * CamelCase('hello_world again'); // returns 'helloWorldAgain'
 * CamelCase('SINGLE'); // returns 'single'
 * CamelCase('   '); // returns ''
 */
function DotCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (str === null || str === undefined) {
        throw new TypeError('Input must be a string');
    }
    const trimmed = str.trim();
    if (trimmed === '') return '';

    // Only allow letters, spaces, and underscores
    if (!/^[a-zA-Z _]+$/.test(trimmed)) {
        throw new TypeError('Input must only contain letters, spaces, or underscores');
    }

    // Split by spaces or underscores
    const words = trimmed.split(/[\s_]+/);

    // Lowercase all words and join with dots
    return words.map(w => w.toLowerCase()).join('.');
}

// Usage examples:

console.log(DotCase('dot case')); // 'dot.case'
console.log(DotCase('hello_world')); // 'hello.world'
console.log(DotCase('hello_world again')); // 'hello.world.again'
console.log(DotCase('SINGLE')); // 'single'
console.log(DotCase('   ')); // ''

try {
    DotCase(123);
} catch (e) {
    console.log(e.message); // 'Input must be a string'
}

try {
    DotCase('5n2M');
} catch (e) {
    console.log(e.message); // 'Input must only contain letters, spaces, or underscores'
}
function CamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (str === null || str === undefined) {
        throw new TypeError('Input must be a string');
    }
    const trimmed = str.trim();
    if (trimmed === '') return '';

    // Only allow letters, spaces, and underscores
    if (!/^[a-zA-Z _]+$/.test(trimmed)) {
        throw new TypeError('Input must only contain letters, spaces, or underscores');
    }

    // Split by spaces or underscores
    const words = trimmed.split(/[\s_]+/);

    // Lowercase all words
    const lowerWords = words.map(w => w.toLowerCase());

    // If only one word, return lowercased
    if (lowerWords.length === 1) {
        return lowerWords[0];
    }

    // Capitalize all words except the first
    const camelCased = lowerWords[0] + lowerWords.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return camelCased;
}

// Usage examples and explanations:

// Example 1: Standard case
console.log(CamelCase('camel case')); // 'camelCase'
// Explanation: First word lowercased, second word capitalized and joined

// Example 2: Underscore separator
console.log(CamelCase('hello_world')); // 'helloWorld'
// Explanation: Underscores treated as word separators

// Example 3: Mixed spaces and underscores
console.log(CamelCase('hello_world again')); // 'helloWorldAgain'

// Example 4: Single word
console.log(CamelCase('SINGLE')); // 'single'
// Explanation: Single word is lowercased

// Example 5: Empty string
console.log(CamelCase('   ')); // ''
// Explanation: Empty or whitespace-only string returns empty string

// Example 6: Invalid input (number)
try {
    CamelCase(123);
} catch (e) {
    console.log(e.message); // 'Input must be a string'
}

// Example 7: Invalid input (symbols)
try {
    CamelCase('5n2M');
} catch (e) {
    console.log(e.message); // 'Input must only contain letters, spaces, or underscores'
}