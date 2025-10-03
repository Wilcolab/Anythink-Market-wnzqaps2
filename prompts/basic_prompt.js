function ConvertStringToCamelcase(str) {
    if (typeof str !== 'string' || !str.length) return '';
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // separate camelCase words
        .replace(/[^a-zA-Z0-9]+/g, ' ') // replace non-alphanumeric with space
        .split(' ')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

// Example usage:
// console.log(ConvertStringToCamelcase('mynum')); // MyNum
// console.log(ConvertStringToCamelcase('my_num_value')); // MyNumValue
// console.log(ConvertStringToCamelcase('my num value')); // MyNumValue