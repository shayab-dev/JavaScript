let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
  let name = document.getElementById('contact-name').value.trim();

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    nameError.style.color = 'red';
    return false;
  }
  nameError.innerHTML =  'ok';
  nameError.style.color = 'seagreen';
  return true;
}

function validatePhone(){
    let phone = document.getElementById('contact-phone').value.trim();

    if(phone.length === 0){
        phoneError.innerHTML = 'Invalid';
        return false;
    }

    if(!/^\d{10}$/.test(phone)){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }

    phoneError.innerHTML = 'ok';
    phoneError.style.color = 'seagreen';
    return true;
}

function validateEmail(){
  let email = document.getElementById('contact-email').value.trim();

  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    emailError.innerHTML = 'Invalid';
    return false;
  }

  emailError.innerHTML = 'ok';
  emailError.style.color = 'seagreen';
  return true;

}

function validateMessage(){
  let message = document.getElementById('contact-message').value;

  let required = 30;
  let left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left + 'more characters required';
    return false;
  }

  messageError.innerHTML = 'ok';
  messageError.style.color = 'seagreen';
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){

    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix the error to submit';

    setTimeout(function(){
      submitError.style.display = 'none';
    },3000);
    
    return false;
  }

  return true;
}