function onSubmit() {
  let name = document.querySelector('#name').value.trim();
  var dob = document.querySelector('#dob').value;

  if (validateInputs(name, dob)) {
    document.getElementById('msgID').innerHTML = buildMessage(name, getAge(dob));
  }

}

function validateInputs(name, dob) {
  if (name === '') {
    document.getElementById('msgID').innerHTML = 'Please enter name details';
    return false;
  } else if (dob === '') {
    document.getElementById('msgID').innerHTML = 'Please enter DoB details';
    return false;
  }
  return true;
}

function getAge(dob) {
  var db = new Date(dob);
  var diff_ms = Date.now() - db.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970) + 1;
}

function buildMessage(name, age) {
  let msg = `Congratulation ${name} you will be ${age} years old on your next birthday`;
  return msg;
}