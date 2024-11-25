const form = document.getElementsByClassName('ready-diving__form');
const nameField = document.getElementById('GET-name');
const phoneField = document.getElementById('GET-phone');
const emailField = document.getElementById('GET-email');

//show error msg
function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}
//show suceess msg
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check phone is valid
function checkPhone() {
    const regE = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
    if (regE.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Phone number is not valid');
      }
    }


//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

