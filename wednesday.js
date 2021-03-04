const fName = document.tuesday_form.field1;
const fEmail = document.tuesday_form.field2;
const fPhone1 = document.tuesday_form.tel_no_1;
const fPhone2 = document.tuesday_form.tel_no_2;
const fPhone3 = document.tuesday_form.tel_no_3;
const fRegarding = document.tuesday_form.field4;
const fMessage = document.tuesday_form.field5;

/*
let nameFunction = () => {
  if (fName.value === '') {
    fName.style.border = '2px solid red';
    fName.focus();
    return false;
  }
  const min = 4;
  if (fName.value.length < min) {
    fName.focus();
    fName.style.border = '2px solid red';
    alert('Your name should have more than four characters!');
    return false;
  }

  const letters = /^[A-Za-z]+$/;
  if (fName.value.match(letters)) {
    return true;
  } else {
    fName.focus();
    fName.style.border = '2px solid red';
    alert('Please ensure your name has only letters!');
  }
};
let emailFunction = () => {
  if (fEmail.value === '') {
    fEmail.style.border = '2px solid red';
    fEmail.focus();
    return false;
  }
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (fEmail.value.match(email)) {
    return true;
  } else {
    fName.focus();
    fEmail.style.border = '2px solid red';
    alert('Please ensure your email is correct!');
  }
};

let phone = () => {
  if (fPhone1.value === '' && fPhone2.value === '' && fPhone3.value === '') {
    let phoneForm = /^[0-9]+$/;

    fPhone1.style.border = '2px solid red';
    fPhone2.style.border = '2px solid red';
    fPhone3.style.border = '2px solid red';
    fPhone1.focus();
    fPhone2.focus();
    fPhone3.focus();
    return false;
    if (
      fPhone1.value.match(phoneForm) &&
      fPhone2.value.match(phoneForm) &&
      fPhone3.value.match(phoneForm)
    ) {
      alert('Please put the a valid phone number.');
      fPhone1.style.border = '2px solid red';
      fPhone2.style.border = '2px solid red';
      fPhone3.style.border = '2px solid red';
      return false;
    }
  }
};
*/

let nameFunction = () => {
  const min = 4;
  const letters = /^[A-Z a-z]+$/;
  if (fName.value === '') {
    fName.style.border = '2px solid red';
    alert('Please fill-in your name!');
    fName.focus();
    return false;
  } else {
    if (fName.value.length < min) {
      fName.style.border = '2px solid red';
      alert('Your name should have more than 3 letters!');
      fName.focus();
      return false;
    } else {
      if (fName.value.match(letters)) {
        return true;
      } else {
        fName.style.border = '2px solid red';
        alert('Please ensure your name has only letters!');
        fName.focus();
        return false;
      }
    }
  }
};

let emailFunction = () => {
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (fEmail.value === '') {
    fEmail.style.border = '2px solid red';
    alert('Please fill-in your email!');
    fEmail.focus();
    return false;
  } else {
    if (fEmail.value.match(email)) {
      return true;
    } else {
      fEmail.style.border = '2px solid red';
      alert('Please ensure your email is correct!');
      fEmail.focus();
      return false;
    }
  }
};

let phoneForm = /^[0-9]+$/;
let phone1 = () => {
  if (fPhone1.value === '') {
    fPhone1.style.border = '2px solid red';
    alert('Please fill-in your phone number(box1)!');
    fPhone1.focus();
    return false;
  } else {
    if (fPhone1.value.match(phoneForm)) {
      if (fPhone1.value.length !== 4) {
        alert('Please put only the first 4 numbers here(box1)!');
        fPhone1.focus();
        return false;
      } else {
        return true;
      }
    } else {
      fPhone1.style.border = '2px solid red';
      alert('Please put the right phone number(box1)!');
      fPhone1.focus();
      return false;
    }
  }
};

let phone2 = () => {
  if (fPhone2.value === '') {
    fPhone2.style.border = '2px solid red';
    alert('Please fill-in your phone number(box2)!');
    fPhone2.focus();
    return false;
  } else {
    if (fPhone2.value.match(phoneForm)) {
      if (fPhone2.value.length !== 4) {
        fPhone2.style.border = '2px solid red';
        alert('Please put only 4 numbers here(box2)!');
        fPhone2.focus();
        return false;
      } else {
        return true;
      }
    } else {
      fPhone2.style.border = '2px solid red';
      alert('Please put the right phone number(box2)!');
      fPhone2.focus();
      return false;
    }
  }
};

let phone3 = () => {
  if (fPhone3.value === '') {
    fPhone3.style.border = '2px solid red';
    alert('Please fill-in your phone number(box3)!');
    fPhone3.focus();
    return false;
  } else {
    if (fPhone3.value.match(phoneForm)) {
      if (fPhone3.value.length !== 2) {
        fPhone3.style.border = '2px solid red';
        alert('Please put only 2 numbers here(box3)!');
        fPhone3.focus();
        return false;
      } else {
        return true;
      }
    } else {
      fPhone3.style.border = '2px solid red';
      alert('Please put the right phone number(box3)!');
      fPhone3.focus();
      return false;
    }
  }
};

let regarding = () => {};
let message = () => {};

const validation = () => {
  // if (nameFunction()) {
  //   if (emailFunction()) {
  //     if (phone1()) {
  //     }
  //   }
  // }
  nameFunction();
  emailFunction();
  phone1();
  phone2();
  phone3();
};
