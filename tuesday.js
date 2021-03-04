const validation = () => {
  const fName = document.tuesday_form.field1;
  const fEmail = document.tuesday_form.field2;
  //   const fPhone1 = document.tuesday_form.tel_no_1;
  //   const fPhone2 = document.tuesday_form.tel_no_2;
  //   const fPhone3 = document.tuesday_form.tel_no_3;
  //   const fRegarding = document.tuesday_form.field4;
  //   const fMessage = document.tuesday_form.field5;

  // validating email
  if (fName.value === '') {
    fName.style.border = '2px solid red';
  }
  const min = 4;
  if (fName.value.length < min) {
    alert('Your name should have more than four characters!');
    return false;
  }
  const letters = /^[A-Za-z]+$/;
  if (fName.value.match(!letters)) {
    alert('Please ensure your name has only letters!');
    fName.style.border = '2px solid red';
  }
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (fEmail.value.match(!email)) {
    fEmail.style.border = '2px solid red';
  }
  return true;
};
validation(); // comment out to be called by html.
