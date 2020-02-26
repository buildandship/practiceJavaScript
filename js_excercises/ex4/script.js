// Create a form like https://www.dropbox.com/s/b4csj0eq7x1cu4f/Form_validation.png and add JS validations to that form.
// When you click on 'Go' JS will check all text fields, and give an alert like "Login Id can't be empty". One alert per empty field.
// For textarea it should check for empty and min length of 50 characters.
// If any field is invalid then it should not submit the form. Also It should also confirm "receive notification"

// TODO: refactored the code in functional style
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    console.log(container);
    // Form
    const form = document.createElement('form');
    form.className = 'form';
    form.id = 'form';
    form.setAttribute('action', '');
    //form.setAttribute('method', 'post');
    form.addEventListener('submit', formvalidation);
    //heading
    const h2 = document.createElement('h2');
    h2.style.textAlign = 'center';
    h2.innerText = 'Registration Form';
    h2.className = 'align-content-center';
    h2.style.backgroundColor = 'bisque';
    form.appendChild(h2);
    //Login ID label
    const loginlabel = document.createElement('label');
    loginlabel.for = 'loginId';
    loginlabel.innerText = 'Login Id';
    form.appendChild(loginlabel);
    //Login ID input
    const logininput = document.createElement('input');
    logininput.type = 'text';
    logininput.name = 'loginid';
    logininput.id = 'loginid';
    form.appendChild(logininput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Email Label
    const emaillabel = document.createElement('label');
    emaillabel.for = 'email';
    emaillabel.innerText = 'Email';
    form.appendChild(emaillabel);
    // Email input
    const emailinput = document.createElement('input');
    emailinput.type = 'text';
    emailinput.name = 'email';
    emailinput.id = 'email';
    form.appendChild(emailinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Name label
    const namelabel = document.createElement('label');
    namelabel.for = 'name';
    namelabel.innerText = 'Name';
    form.appendChild(namelabel);
    // Name input
    const nameinput = document.createElement('input');
    nameinput.type = 'text';
    nameinput.name = 'name';
    nameinput.id = 'name';
    form.appendChild(nameinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Timezone label
    const timezonelabel = document.createElement('label');
    timezonelabel.for = 'timezone';
    timezonelabel.innerText = 'Timezone';
    form.appendChild(timezonelabel);
    // Timezone input
    const timezoneselect = document.createElement('select');
    timezoneselect.id = 'timezones';
    timezoneselect.name = 'timezones';

    const option0 = document.createElement('option');
    option0.value = '';
    option0.innerText = 'Select';

    const option1 = document.createElement('option');
    option1.value = 'GMT';
    option1.innerText = 'GMT';

    const option2 = document.createElement('option');
    option2.value = 'IST';
    option2.innerText = 'IST';

    timezoneselect.appendChild(option0);
    timezoneselect.appendChild(option1);
    timezoneselect.appendChild(option2);
    form.appendChild(timezoneselect);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Home page label
    const homepagelabel = document.createElement('label');
    homepagelabel.for = 'homepage';
    homepagelabel.innerText = 'Home Page';
    form.appendChild(homepagelabel);

    // Home page input
    const homepageinput = document.createElement('input');
    homepageinput.type = 'url';
    homepageinput.id = 'homepage';
    homepageinput.name = 'homepage';
    form.appendChild(homepageinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // About me label
    const aboutmelabel = document.createElement('label');
    aboutmelabel.for = 'aboutme';
    aboutmelabel.innerText = 'About Me';
    form.appendChild(aboutmelabel);
    form.appendChild(document.createElement('br'));
    // About me input
    const aboutmeinput = document.createElement('textarea');
    aboutmeinput.id = 'aboutme';
    aboutmeinput.name = 'aboutme';
    form.appendChild(aboutmeinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Receive checkbox
    const receivechkbox = document.createElement('input');
    receivechkbox.type = 'checkbox';
    receivechkbox.id = 'receivebox';
    receivechkbox.name = 'receivebox';
    form.appendChild(receivechkbox);
    // Receive label
    const receivelabel = document.createElement('label');
    receivelabel.for = 'receive';
    receivelabel.innerText = 'Receive notification of comments.';
    form.appendChild(receivelabel);
    const ptext = document.createElement('p');
    ptext.innerText = 'You will be sent an email when someone post comments to your Blog or Album';
    form.appendChild(ptext);

    // Go Btn
    const gobtn = document.createElement('button');
    gobtn.type = 'submit';
    gobtn.name = 'submit';
    gobtn.innerText = 'Go';
    form.appendChild(gobtn);
    container.appendChild(form);
});


formvalidation = (e) => {
    e.preventDefault();
    // Login Id
    const login = document.querySelector('#loginid')
    if (isEmptyInput(login, 'Login Id can\'t be empty!!!')) {
        return false;
    } else if (!isAlphabet(login, 'Login Id must be alphabets!!!')) {
        return false;
    }
    //Email
    const email = document.getElementById('email');
    if (isEmptyInput(email, 'Email can\'t be empty!!!')) {
        return false;
    } else if (!validEmail(email, 'Please enter the valid email address')) {
        return false;
    }

    // Name
    const name = document.getElementById('name');
    if (isEmptyInput(name, 'Name can\'t be empty!!!')) {
        return false;
    } else if (!isAlphabet(name, 'Name must be alphabets!!!')) {
        return false;
    }

    // Timezone 
    const timezone = document.getElementById('timezones');
    if (isEmptyInput(timezone, 'Timezone can\'t be empty!!!')) {
        return false;
    }

    // Homepage
    const homepage = document.getElementById('homepage');
    if (isEmptyInput(homepage, 'Home page can\'t be empty')) {
        return false;
    } else if (!validUrl(homepage, 'URL is not valid. Please check')) {
        return false;
    }

    //AboutMe
    const aboutme = document.getElementById('aboutme');
    if (isEmptyInput(aboutme, 'About Me can\'t be empty!!!')) {
        return false;
    } else if (!validTextLength(aboutme, 'Minimum length of 50 characters required', 50, 200)) {
        return false;
    }

    // receiveNotification
    const receiveNotification = document.getElementById('receivebox');
    console.log(receiveNotification);
    if (!receiveNotification.checked) {
        alert('Please select receive notifications');
        receiveNotification.focus();
        return false;
    }

    alert('Form Validated Successfully');
};

// empty validation
isEmptyInput = (text, alertmsg) => {
    if (text.value.length === 0) {
        alert(alertmsg);
        text.focus();
        return true;
    } else {
        return false;
    }
};

// input alphabets validation
isAlphabet = (text, alertmsg) => {
    const alphaRegexp = /^[a-zA-Z]+$/;
    if (text.value.match(alphaRegexp)) {
        return true;
    } else {
        alert(alertmsg);
        text.focus();
        return false;
    }
};

// email validation 
validEmail = (email, alertmsg) => {
    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailRegExp)) {
        return true;
    } else {
        alert(alertmsg);
        email.focus();
        return false;
    }
};

// url validation
validUrl = (url, alertmsg) => {
    const urlRegExp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (urlRegExp.test(url.value)) {
        return true;
    } else {
        alert(alertmsg);
        url.focus();
        return false;
    }
};

// text length validation
validTextLength = (text, alertmsg, min, max) => {
    if (text.value.length >= min && text.value.length <= max) {
        return true;
    } else {
        alert(alertmsg);
        text.focus();
        return false;
    }
};