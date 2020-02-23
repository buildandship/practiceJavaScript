// Create a form like https://www.dropbox.com/s/b4csj0eq7x1cu4f/Form_validation.png and add JS validations to that form.
// When you click on 'Go' JS will check all text fields, and give an alert like "Login Id can't be empty". One alert per empty field.
// For textarea it should check for empty and min length of 50 characters.
// If any field is invalid then it should not submit the form. Also It should also confirm "receive notification"

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    console.log(container);
    // Form
    const form = document.createElement('form');
    form.className = 'form';
    form.id = 'form';
    form.setAttribute('action', '');
    form.setAttribute('method', 'post');
    //heading
    const h2 = document.createElement('h2');
    h2.style.textAlign = 'center';
    h2.innerText = 'Registration Form';
    h2.className = 'align-content-center';
    h2.style.backgroundColor = 'bisque';
    form.appendChild(h2);
    //Login ID
    const loginlabel = document.createElement('label');
    loginlabel.for = 'loginId';
    loginlabel.innerText = 'Login Id';
    loginlabel.className = 'align-content-center';
    form.appendChild(loginlabel);

    container.appendChild(form);
    //heading 

});