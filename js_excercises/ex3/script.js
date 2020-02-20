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
    //newDiv.height = '100%';
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
        //console.log('KEY::' + key);
        newDiv.appendChild(parentCheckbox);
        newDiv.appendChild(parentLabel);
        map.get(key).forEach(value => {
            let p = document.createElement('p');
            let childCheckbox = document.createElement('input');
            let childLabel = document.createElement('label');
            childCheckbox.type = 'checkbox';
            childCheckbox.value = value;
            childCheckbox.id = value;
            childCheckbox.name = key;
            childCheckbox.style.display = 'none';
            childCheckbox.addEventListener('click', childClick);
            childLabel.for = value;
            childLabel.innerHTML = value;
            childLabel.className = value;
            childLabel.style.display = 'none';
            //console.log(value);
            //  newDiv.appendChild(document.createElement('br'));
            // newDiv.appendChild(document.createElement('br'));
            newDiv.appendChild(childCheckbox);
            newDiv.appendChild(childLabel);

        });
        //newDiv.appendChild(document.createElement('br'));
        //newDiv.appendChild(document.createElement('br'));
    });
    container.appendChild(newDiv);
});

parentClick = (e) => {
    console.log('Parent Clicked');
    console.log(e.target.name);
    console.log('CLICKING ' + this);
    let childboxes = document.getElementsByName(e.target.id);
    let childlabels = document.querySelectorAll('.' + e.target.id)
    for (let i = 0; i < childboxes.length; i++) {
        childboxes[i].checked = true;
        childboxes[i].style.display = '';
        childlabels[i].classList.remove(e.target.id);

    }

}

childClick = (e) => {
    console.log('Child Clicked');
}


// R3: Now when you click on color checkbox it should display four checkboxes(red, yellow, green, blue) as a child list 
// and color checkbox should be checked with its child list of checkboxes.

// R4: Again when you click on color checkbox child list should be hidden 
// and its child checkboxes should get deselected(clear state). Same with movies, drink and bikes.