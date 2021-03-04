// const inputFields = {
//   myName: document.user.field1,
//   myEmail: document.user.field2,
//   myPhone: document.user.field3,
//   mySubject: document.user[3],
//   myWebsite: document.user.field4,
//   myMessage: document.user.field5,
// };

// const inputArray = Object.value(inputFields);
const myName = document.user.field1;
const myEmail = document.user.field2;
const myPhone = document.user.field3;
const myWebsite = document.user.field4;
const mySubject = document.user.field5;
const myMessage = document.user.field6;

const inputArray = [myName, myEmail, myPhone, myWebsite, mySubject, myMessage];

function sendMessage() {
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i].value === '' || inputArray[i].value === Number('')) {
      inputArray[i].style.border = '2px solid red';
      inputArray[i].focus();
    }
  }
}
sendMessage(); // Comment out for use with HTML.
