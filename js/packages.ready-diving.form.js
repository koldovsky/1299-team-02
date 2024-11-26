const form = document.querySelector('.ready-diving__form');
const nameField = document.getElementById('GET-name');
const phoneField = document.getElementById('GET-phone');
const emailField = document.getElementById('GET-email');

// Show error message
function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = 'ready-diving__check error'; // Apply error class
  const small = formControl.querySelector('small');
  if (small) {
      small.innerText = msg; // Set the error message
      small.style.visibility = 'visible'; // Ensure the message is visible
  }}
// Show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'ready-diving__check success'; // Apply success class
  const small = formControl.querySelector('small');
  if (small) {
      small.style.visibility = 'hidden'; // Hide the error message
  }
}

// Check phone is valid
function checkPhone(input) {
    const regE = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    if (regE.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Phone number is not valid');
    }
}

// Check email is valid
function checkEmail(input) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

// Check length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!checkRequired([nameField, phoneField, emailField])) {
        checkLength(nameField, 3, 15);
        checkLength(phoneField, 6, 25);
        checkPhone(phoneField);
        checkEmail(emailField);
    }
});