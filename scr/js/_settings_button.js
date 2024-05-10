
const uppercase_checkbox = document.getElementById('uppercase_checkbox');
const uppercase_setting = document.getElementById('uppercase_setting');

const lowercase_checkbox = document.getElementById('lowercase_checkbox');
const lowercase_setting = document.getElementById('lowercase_setting');

const number_checkbox = document.getElementById('number_checkbox');
const number_setting = document.getElementById('number_setting');

const symbol_checkbox = document.getElementById('symbol_checkbox');
const symbol_setting = document.getElementById('symbol_setting');


const checkbox_array = [
    uppercase_checkbox,
    lowercase_checkbox,
    number_checkbox,
    symbol_checkbox
];

const setting_array = [
    uppercase_setting,
    lowercase_setting,
    number_setting,
    symbol_setting
];


function changeBackground(checkbox, setting_div) {
    return function() {
        if (checkbox.checked) {
            setting_div.style.backgroundImage = 'linear-gradient(135deg, #667eea79 0%, #764ba2 100%)';
        } else {
            setting_div.style.backgroundImage = '';
        }
    }
}


for (let i = 0; i < checkbox_array.length; i++) {
    const checkbox = checkbox_array[i];
    const setting_div = setting_array[i];

    checkbox.addEventListener('click', changeBackground(checkbox, setting_div));
    changeBackground(checkbox, setting_div)()  // dubbele haken om de return functie te runnen
};

