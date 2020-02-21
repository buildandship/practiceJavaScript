// Requirements
// R1: Create a div with height 100 and scroll bars
// R2: Display a list of checkbox color, drinks, movies and bikes in this div.
// Create a map of key and list objects
let map = new Map([
    ['colors', ['Red', 'Yellow', 'Green', 'Blue']],
    ['movies', ['Darr', 'Sir']],
    ['drinks', ['Coke', 'Pepsi', 'Dev']],
    ['bikes', ['V Rod', 'Pulsar', 'CBZ']],
    ['beer', ['Budweiser', 'Carlberg', 'Heineken']]
]);
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.container');
    let newDiv = document.createElement('div');
    newDiv.id = 'main';
    newDiv.className = 'main';
    newDiv.style.height = '100px';
    newDiv.style.overflow = 'scroll';
    // Iterate map and create parent and child checkboxes
    map.forEach((value, key) => {
        let parentCheckbox = document.createElement('input');
        let parentLabel = document.createElement('label');
        parentCheckbox.type = 'checkbox';
        parentCheckbox.value = key;
        parentCheckbox.id = key;
        parentCheckbox.name = 'parent-' + key;
        parentCheckbox.addEventListener('click', parentClick);
        parentLabel.for = key;
        parentLabel.innerHTML = key;
        newDiv.appendChild(parentCheckbox);
        newDiv.appendChild(parentLabel);
        /*
        map.get(key).forEach(value => {
            let childCheckbox = document.createElement('input');
            let childLabel = document.createElement('label');
            childCheckbox.type = 'checkbox';
            childCheckbox.value = value;
            childCheckbox.id = value;
            childCheckbox.name = key;
            childCheckbox.addEventListener('click', childClick);
            childLabel.for = value;
            childLabel.innerHTML = value;
            // newDiv.appendChild(document.createElement('br'));
            // newDiv.appendChild(document.createElement('br'));
            newDiv.appendChild(childCheckbox);
            newDiv.appendChild(childLabel);

        });
        */
        // newDiv.appendChild(document.createElement('br'));
        // newDiv.appendChild(document.createElement('br'));
    });
    container.appendChild(newDiv);
});

// R3: Now when you click on color checkbox it should display four checkboxes(red, yellow, green, blue) as a child list 
// and color checkbox should be checked with its child list of checkboxes.

// R4: Again when you click on color checkbox child list should be hidden 
// and its child checkboxes should get deselected(clear state). Same with movies, drink and bikes.
parentClick = (e) => {
    console.log('Parent Clicked');
    console.log(e.target);
    console.log(e.target.checked);
    let key = e.target.id;
    let divpresent = document.querySelectorAll('#child-' + key);
    console.log(divpresent.length);
    if (e.target.checked) {
        let main = document.querySelector('.main');
        let newDiv = document.createElement('div');
        if (divpresent.length === 0) {
            newDiv.id = 'child-' + key;
            newDiv.className = 'child-' + key;
            map.get(key).forEach(value => {
                let p = document.createElement('p');
                let childCheckbox = document.createElement('input');
                let childLabel = document.createElement('label');
                childCheckbox.type = 'checkbox';
                childCheckbox.value = value;
                childCheckbox.id = value;
                childCheckbox.name = key;
                childCheckbox.checked = e.target.checked;
                childCheckbox.addEventListener('click', childClick);
                childLabel.for = value;
                childLabel.innerHTML = value;
                newDiv.appendChild(document.createElement('br'));
                newDiv.appendChild(document.createElement('br'));
                newDiv.appendChild(childCheckbox);
                newDiv.appendChild(childLabel);
            });

            main.appendChild(newDiv);
        }
        document.getElementById('child-' + key).style.display = 'block';
        document.getElementById('child-' + key).scrollIntoView();
    } else if (!e.target.checked) {
        //document.getElementById('child-' + key).remove();
        document.getElementById('child-' + key).style.display = 'none';
        let childboxes = document.getElementsByName(e.target.id);
        childboxes.forEach(b => {
            b.checked = false;
        });

    }
}

childClick = (e) => {
    console.log('Child Clicked');
    console.log(e.target);
    console.log(e.target.checked);
}

