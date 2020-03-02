demo = () => {
    // call
    const lineSeparator = '=====================================================';
    console.log('Call Demo');
    let person1 = { firstName: 'Jon', lastName: 'Kuperman' };
    let person2 = { firstName: 'Kelly', lastName: 'King' };

    function say(greeting) {
        console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
    }

    say.call(person1, 'Hello'); // Hello Jon Kuperman
    say.call(person2, 'Hello'); // Hello Kelly King

    console.log(lineSeparator);

    // apply
    console.log('Apply Demo');
    // let person1 = { firstName: 'Jon', lastName: 'Kuperman' };
    // let person2 = { firstName: 'Kelly', lastName: 'King' };

    function say(greeting) {
        console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
    }

    say.apply(person1, ['Hello']); // Hello Jon Kuperman
    say.apply(person2, ['Hello']); // Hello Kelly King
    console.log(lineSeparator);

    // bind
    console.log('Bind Demo');
    // let person1 = { firstName: 'Jon', lastName: 'Kuperman' };
    // let person2 = { firstName: 'Kelly', lastName: 'King' };

    function say() {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);
    }

    let sayHelloJon = say.bind(person1);
    let sayHelloKelly = say.bind(person2);

    sayHelloJon(); // Hello Jon Kuperman
    sayHelloKelly(); // Hello Kelly King
    console.log(lineSeparator);
}

document.getElementById('btn').addEventListener('click', demo);