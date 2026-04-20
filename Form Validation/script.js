let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName(){
  let name = document.getElementById('contact-name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is reruired';
    nameError.style.color = 'red';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML =  'valid';
  nameError.style.color = 'seagreen';
  return true;
}

function validatePhone(){
  let phone = document.getElementById('contact-phone').value;

  if(phone.length == 0){
    phoneError.innerHTML = 'Invalid';
    phoneError.style.color = 'red';
    return false;
  }
  if(phone.lenght !== 10){
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only digits please';
    return false;
  }

  phoneError.innerHTML = 'ok';
  phoneError.style.color = 'seagreen';
  return true;
  
}