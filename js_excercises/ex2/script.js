// R1: Create a list of checkboxs(Sunday, Monday, Wednesday, Thursday, Tuesday, Friday, Saturday and none)
// Create a list of check boxes for 7 days and none
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'None'];
// Add days to document
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.container');
    for (let day = 0; day < DAYS.length; day++) {
        let checkbox = document.createElement('input');
        let daylabel = document.createElement('label');
        checkbox.type = 'checkbox';
        checkbox.value = DAYS[day];
        checkbox.id = (DAYS[day].toLowerCase());
        checkbox.name = 'day';
        if (DAYS[day] == 'None') {
            checkbox.name = 'none'
            checkbox.addEventListener('click', toggle);
        } else {
            checkbox.addEventListener('click', countCheckedBoxes);
        }
        daylabel.for = DAYS[day];
        daylabel.innerHTML = DAYS[day];
        container.appendChild(checkbox);
        container.appendChild(daylabel);
    }
    // 
});

// Get checkboxes check -> true(checked) check -> false(unchecked)
// none -> true (include none), none -> false(ignore none)
function getCheckboxes(check, none) {
    //console.log(none);
    let boxes = [];
    // get all checked boxes including none
    if (check === true && none === true) {
        boxes = Array.from(document.querySelectorAll('input:checked'));
        //console.log(boxes);
        return boxes;
    } else if (check === true && none === false) {
        // get all checked boxes excluding none
        boxes = Array.from(document.querySelectorAll('input:checked'));
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].id === 'none')
                boxes.splice(i, 1);
        }
        return boxes;
    } else if (check === false && none === true) {
        // get all unchecked boxes excluding none
        let totalBoxes = document.querySelectorAll('input');
        for (let i = 0; i < totalBoxes.length; i++) {
            if (!totalBoxes[i].checked) {
                boxes.push(totalBoxes[i]);
            }
        }
        return boxes;
    } else if (check === false && none === false) {
        // get all unchecked boxes including none 
        let totalBoxes = document.querySelectorAll('input');
        for (let i = 0; i < totalBoxes.length; i++) {
            if (!totalBoxes[i].checked && totalBoxes[i].id !== 'none') {
                boxes.push(totalBoxes[i]);
            }
        }
        return boxes;
    } else if (check === null && none === false) {
        // All check boxes excluding none
        let totalBoxes = document.querySelectorAll('input');
        for (let i = 0; i < totalBoxes.length; i++) {
            if (totalBoxes[i].id !== 'none') {
                boxes.push(totalBoxes[i]);
            }
        }
        return boxes;
    } else if (check === null && none === true) {
        // Only none check box
        boxes = document.querySelector('#none');
    } else if (check === null && none === null) {
        // All check boxes including none
        boxes = document.querySelectorAll('input');
        return boxes;
    }
}

//R2 Now when I start checking these checkboxs, it should not let me check more than 3 checkboxes. 
//R3 When I try to check on 4th checkbox it should alert me as "Only 3 days can be selected. You have already selected sunday, monday and tuesday". 
//Check count of checked boxes
function countCheckedBoxes() {
    if (getCheckboxes(true, false).length > 3) {
        this.checked = !this.checked;
        let message = `Only ${getCheckboxes(true, false).length} days can be selected. You have already selected ${getCheckboxes(true, false)[0].value}, ${getCheckboxes(true, false)[1].value}, and ${getCheckboxes(true, false)[2].value}`;
        alert(message);
        showAlert(message);
        //disableAllUncheckedBoxes(getCheckboxes(false, false));
    } else {
        clearAlert();
    }
    invertSelectionDayNone();
}

function disableAllUncheckedBoxes(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('disabled', 'disabled');
        //boxes[i].disabled = true;
    }
}

// show alert message
function showAlert(message) {
    clearAlert();
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    div.className = 'message';
    div.appendChild(document.createTextNode(message));
    container.appendChild(div);
}

// Clear Alert
function clearAlert() {
    const messageDiv = document.querySelector('.message');
    if (messageDiv !== null) {
        messageDiv.remove();
    }
}

//R4 Now when I click on none, all other checkboxs should be deselected. 
//Deselect all the checkboxes on clicking none
function toggle() {
    let boxes = getCheckboxes(null, false);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeAttribute('disabled');
        boxes[i].checked = false;
    }
    clearAlert();
}

//R5 Also when 'none' is selected and I select any other option(lets assume sunday), that option(sunday) will be selected and none will be deselected.
//Toggle between days and none
function invertSelectionDayNone() {
    let noneBox = document.querySelector('#none');
    if (noneBox.checked) {
        noneBox.checked = false;
    }
}