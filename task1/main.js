// function onSubmit() {
//   let name = document.querySelector('#name').value.trim();
//   var dob = document.querySelector('#dob').value;

//   if (validateInputs(name, dob)) {
//     document.getElementById('msgID').innerHTML = buildMessage(name, getAge(dob));
//   }

// }

// function validateInputs(name, dob) {
//   if (name === '') {
//     document.getElementById('msgID').innerHTML = 'Please enter name details';
//     return false;
//   } else if (dob === '') {
//     document.getElementById('msgID').innerHTML = 'Please enter DoB details';
//     return false;
//   }
//   return true;
// }

// function getAge(dob) {
//   var db = new Date(dob);
//   var diff_ms = Date.now() - db.getTime();
//   var age_dt = new Date(diff_ms);
//   return Math.abs(age_dt.getUTCFullYear() - 1970) + 1;
// }

// function buildMessage(name, age) {
//   let msg = `Congratulation ${name} you will be ${age} years old on your next birthday`;
//   return msg;
// }


class UI {
  // Disabled all input fields

  static disableAllInputs() {
    // disable input fields
    var inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach((el) => {
      el.setAttribute('disabled', 'disabled');
    });

    // disable select box
    var select = document.querySelector('select');
    select.setAttribute('disabled', 'disabled');

    // disable textarea
    var textArea = document.querySelector('textarea');
    textArea.setAttribute('disabled', 'disabled');


    // button
    var submit = document.querySelectorAll('button');
    submit[1].setAttribute('disabled', 'disabled');

  }
}


class ValidateInputs {

  static validateTextFields() {

  }

}

document.addEventListener("DOMContentLoaded", function () {
  UI.disableAllInputs();
});

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#fname').disabled = false;
});


