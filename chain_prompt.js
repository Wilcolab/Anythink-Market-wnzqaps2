/**
 * Converts a camelCase or PascalCase string to kebab-case.
 * Handles error cases and edge cases as described.
 *
 * Examples:
 *   toKebabCase("helloWorld")      // "hello-world"
 *   toKebabCase("HelloWorld")      // "hello-world"
 *   toKebabCase("HELLO")           // "hello"
 *   toKebabCase("simple")          // "simple"
 *   toKebabCase("5n2M")            // throws TypeError: Input contains invalid characters (only letters allowed)
 *   toKebabCase(123)               // throws TypeError: Input must be a valid string. Received: number
 *   toKebabCase("")                // ""
 */

function toKebabCase(input) {
    // Check for null or undefined
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new TypeError(
            `Input must be a valid string. Received: ${typeof input}`
        );
    }

    // Trim whitespace
    const str = input.trim();

    // Empty string edge case
    if (str === "") return "";

    // Validate only letters (a-zA-Z)
    if (!/^[a-zA-Z]+$/.test(str)) {
        throw new TypeError(
            "Input contains invalid characters (only letters allowed)"
        );
    }

    // All uppercase edge case
    if (/^[A-Z]+$/.test(str)) {
        return str.toLowerCase();
    }

    // Single lowercase word edge case
    if (/^[a-z]+$/.test(str)) {
        return str;
    }

    // Insert hyphens before uppercase letters (except first char), then lowercase
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2") // helloWorld -> hello-World
        .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // XMLParser -> XML-Parser
        .toLowerCase();
}

// Example usage (uncomment to test):
// console.log(toKebabCase("helloWorld")); // "hello-world"
// console.log(toKebabCase("HelloWorld")); // "hello-world"
// console.log(toKebabCase("HELLO"));      // "hello"
// console.log(toKebabCase("simple"));     // "simple"
// console.log(toKebabCase("5n2M"));       // throws TypeError
// console.log(toKebabCase(123));          // throws TypeError
// console.log(toKebabCase(""));           // ""