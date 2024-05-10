// Scripts for all button related eventlisteners
import { generatePassword } from './_password_generator.js'

// The Viewbox where the result will be shown
const result_viewbox = document.getElementById("result");

// Selecting the Range Slider container which will effect the LENGTH property of the password.
const slider = document.querySelector(".length__slider");

// Checkboxes representing the options that is responsible to create differnt type of password based on user
const uppercaseEl = document.getElementById("uppercase_checkbox");
const lowercaseEl = document.getElementById("lowercase_checkbox");
const numberEl = document.getElementById("number_checkbox");
const symbolEl = document.getElementById("symbol_checkbox");


// Button to copy the text
const copyBtn = document.getElementById("copy-btn");
// Result viewbox container
const resultContainer = document.querySelector(".result");
// Text info showed after generate button is clicked
const copyInfo = document.querySelector(".result__info.right");
// Text appear after copy button is clicked
const copiedInfo = document.querySelector(".result__info.left");

const generateBtn = document.getElementById('generateBtn');

// if this variable is trye only then the copyBtn will appear, i.e. when the user first click generate the copyBth will interact.
let generatedPasswordFlag = false;

generateBtn.addEventListener('click', () => {
	const length = +slider.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	generatedPasswordFlag = true;

	if (!hasLower & !hasUpper & !hasNumber & !hasSymbol) {
		result_viewbox.innerText = 'Selecteer iets man bro';
	} else {
		result_viewbox.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
	}
}) 