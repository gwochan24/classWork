const fName = document.tuesday_form.field1;
const fEmail = document.tuesday_form.field2;
const fPhone1 = document.tuesday_form.tel_no_1;
const fPhone2 = document.tuesday_form.tel_no_2;
const fPhone3 = document.tuesday_form.tel_no_3;
const fMessage = document.tuesday_form.field5;

/*
const nameFocus = () => {
  fName.style.border = '2px solid gold';
};

// fName.addEventListener('focus', nameFocus);

fName.addEventListener('blur', nameFocus);
*/

// Validation for name field.
const nameFunction = () => {
  const min = 4;
  const letters = /^[A-Za-z]+$/;

  if (fName.value === '') {
    alert('Please fill-in your name!');
    fName.style.border = '2px solid red';
    fName.focus();
  } else {
    if (fName.value.length < min) {
      fName.focus();
      fName.style.border = '2px solid red';
      alert('Your name should have more than four characters!');
    } else {
      if (fName.value.match(!letters)) {
        fName.focus();
        fName.style.border = '2px solid red';
        alert('Please ensure your name has only letters!');
        return false;
      } // Ensures only alphabetical characters are fill-in.
      return true;
    } // Ensures the name field has more than 3 characters.
    return true;
  } // checks if the name field is empty!
  return true;
};

// Validation of email.
const emailFunction = () => {
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Dictates the email format.
  if (fEmail.value === '') {
    fEmail.style.border = '2px solid red';
    fEmail.focus();
    alert('Please fill-in your email!');
  } else {
    if (fEmail.value.match(!email)) {
      fName.focus();
      fEmail.style.border = '2px solid red';
      alert('Please ensure your email is correct!');
    } else {
      return true;
    } // Checks if the email is in the right format.
    return true;
  } // Checks if email field is empty.
  return true;
};

const phone = () => {
  const phoneForm = /^[0-9]+$/; // Ensures only numbers are filled in!

  const phoneFormPlus = /^\+[0-9]+$/; // Allows use of '+' and numbers!

  const boxPositions = [1, 2, 3]; // Numbers segments of the phone number!

  const [a, b, c] = boxPositions; // Destructuring of array to gain access to items in the array.

  if (fPhone1.value === '') {
    fPhone1.style.border = '2px solid red';
    fPhone1.focus();
    alert(`Please fill in your country code in box${a}!`);
  } else {
    if (fPhone1.value.match(phoneFormPlus)) {
      if (fPhone1.value.length !== 4) {
        alert(`Please put your country code like (+256) here in box${a}!`);
        fPhone1.focus();
        return false;
      } // Ensures only 4 charaters are filled in.
    } else {
      alert(`Please put a valid country code in box${a} e.g. +256`);
      fPhone1.style.border = '2px solid red';
      return false;
    } // Ensures the value is the form +XXX; Where the X must be a number.
    return true;
  } // Checks if fPhone1 field is empty!

  if (fPhone2.value === '') {
    fPhone2.style.border = '2px solid red';
    fPhone2.focus();
    alert(`Please fill in next 3 digits of your phone number in box${b}!`);
  } else {
    if (fPhone2.value.match(phoneForm)) {
      if (fPhone2.value.length !== 3) {
        alert(`Please put only 3 numbers here in box${b}!`);
        fPhone2.focus();
      } // Ensures only 3 charaters are filled
    } else {
      alert(`Please fill-in only numbers in box${b}!`);
      fPhone2.style.border = '2px solid red';
      return false;
    } // Ensures the value contains only numbers.
    return true;
  } // Checks if fPhone2 field is empty!

  if (fPhone3.value === '') {
    fPhone3.style.border = '2px solid red';
    fPhone3.focus();
    alert(`Please fill-in the last 6 numbers of your phone number in box${c}!`);
  } else {
    if (fPhone3.value.match(phoneForm)) {
      if (fPhone3.value.length !== 6) {
        alert(`Please put only 6 numbers here in box${c}!`);
        fPhone3.focus();
      } else {
        return true;
      } // Ensures only 6 charaters are filled
    } else {
      alert(`Please fill-in only numbers in box${c}!`);
      fPhone3.style.border = '2px solid red';
      return false;
    } // Ensures the value contains only numbers.
    return true;
  } // Checks if fPhone3 field is empty!
  return true;
};

const message = () => {
  if (fMessage.value === '') {
    fMessage.style.border = '2px solid red';
    alert('Please include-in your message!');
    fMessage.focus();
  } else {
    return true;
  } //  Ensure fMessage field is not empty!
  return true;
};

// Encompasses other functions; All the calls are handled as 1 call.
const validation = () => {
  nameFunction();
  emailFunction();
  phone();
  message();
};

document.tuesday_form.addEventListener('submit', validation); // Watches the validity of data filled in.
