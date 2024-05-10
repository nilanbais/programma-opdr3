// Scripts for all button related eventlisteners
import { generatePasswordStrength } from './_entropy.js';
import { generatePassword } from './_password_generator.js'

// The Viewboxes where the result will be shown
const result_viewbox = document.getElementById("result");
const entropy_viewbox = document.getElementById("entropy__viewbox");

// Selecting the Range Slider container which will effect the LENGTH property of the password.
const slider = document.querySelector(".length__slider");

// Checkboxes representing the options that is responsible to create differnt type of password based on user
const uppercaseEl = document.getElementById("uppercase_checkbox");
const lowercaseEl = document.getElementById("lowercase_checkbox");
const numberEl = document.getElementById("number_checkbox");
const symbolEl = document.getElementById("symbol_checkbox");


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

	
	copiedInfo.style.visibility = '';
	
	if (!hasLower & !hasUpper & !hasNumber & !hasSymbol) {
		result_viewbox.innerText = 'Selecteer iets man bro';
		copyBtn.style.visibility = '';
		entropy_viewbox.innerText = '';
	} else {
		result_viewbox.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
		copyBtn.style.visibility = "visible";
		entropy_viewbox.innerText = generatePasswordStrength(length, hasLower, hasUpper, hasNumber, hasSymbol);
	}
}) 



// 
// Copy button 
// 

// DivButton to copy the text
const copyBtn = document.getElementById("copy-btn");

// Text appear after copy button is clicked
const copiedInfo = document.querySelector(".result__info.left");

// Copy Password in clipboard
copyBtn.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = result_viewbox.innerText;
	if (!generatedPasswordFlag) {
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	navigator.clipboard.writeText(password);
	textarea.remove();

	copiedInfo.style.visibility = "visible"
});