const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show Input Error Messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (username.value === '') {
    showError(username, 'Username is required!');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required!');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required!');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'Password is required!');
  } else {
    showSuccess(password2);
  }
});
