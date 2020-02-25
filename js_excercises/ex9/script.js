document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    console.log(container);
    // Form
    const form = document.createElement('form');
    form.className = 'form';
    form.id = 'form';
    form.setAttribute('action', 'https://google.com');
    //form.setAttribute('method', 'post');
    form.addEventListener('submit', formvalidation);
    //heading
    const h2 = document.createElement('h2');
    h2.style.textAlign = 'center';
    h2.innerText = 'Result Form';
    h2.className = 'align-content-center';
    h2.style.backgroundColor = 'bisque';
    form.appendChild(h2);
    //Number label
    const numberlabel = document.createElement('label');
    numberlabel.for = 'number';
    numberlabel.innerText = 'Enter Number';
    form.appendChild(numberlabel);
    //Number input
    const numberinput = document.createElement('input');
    numberinput.type = 'text';
    numberinput.name = 'number';
    numberinput.id = 'number';
    form.appendChild(numberinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Result Label
    const resultlabel = document.createElement('label');
    resultlabel.for = 'result';
    resultlabel.innerText = 'Result';
    form.appendChild(resultlabel);
    // Result input
    const resultinput = document.createElement('input');
    resultinput.type = 'text';
    resultinput.name = 'result';
    resultinput.id = 'result';
    form.appendChild(resultinput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    // Go Btn
    const gobtn = document.createElement('button');
    gobtn.type = 'submit';
    gobtn.name = 'submit';
    gobtn.innerText = 'Submit';
    form.appendChild(gobtn);
    container.appendChild(form);
});

formvalidation = () => {
    //event.preventDefault();
    console.log('Formvalidation');
    const number = document.getElementById('number');

    if (isEmptyInput(number, 'Number can\'t be empty!!!')) {
        event.preventDefault();
        return false;
    }

    console.log(number.value);
    if (!isNaN(number.value)) {
        document.getElementById('result').value = true;
        return true;
    } else {
        document.getElementById('result').value = false;
        event.preventDefault();
        return false;
    }

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