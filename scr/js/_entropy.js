import { symbols } from './_password_generator.js';


const uppercase_length = 26;
const lowercase_length = 26;
const numbers_length = 10;
const symbols_length = symbols.length;

function calcEntropy(length, lower, upper, number, symbol) {
    let possible_chars = 0;
    if (lower) {
        possible_chars += lowercase_length;
    }
    if (upper) {
        possible_chars += uppercase_length;
    }
    if (number) {
        possible_chars += numbers_length;
    }
    if (symbol) {
        possible_chars += symbols_length;
    }
    
    const password_entropy = Math.log2(Math.pow(possible_chars, length));
    return Math.round(password_entropy);
}

export function generatePasswordStrength(length, lower, upper, number, symbol) {
    const password_entropy = calcEntropy(length, lower, upper, number, symbol);
    console.log(password_entropy)
    let password_strength = "";
    if (password_entropy <= 35) {
        password_strength = "Very weak";

    } else if (password_entropy > 36 && password_entropy <= 59) {
        password_strength = "Weak";

    } else if (password_entropy > 60 && password_entropy <= 119) {
        password_strength = "Strong";

    } else if (password_entropy >= 120) {
        password_strength = "Very strong";

    }

    return password_strength;
}