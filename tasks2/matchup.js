class MatchUpBox {
  constructor() {
    this.boxesArray = boxes;
  }
}

function flipBox() {
  //console.log(this)
  // if (this.style.backgroundColor === 'white  ') {
  //   this.style.backgroundColor === '';
  //   return;
  // }
  // this.style.backgroundColor = 'white';

  if (this.classList.contains("default")) {
    this.classList.remove("default");
    this.innerText = this.innerHTML;
    return;
  }
  this.classList.add("default");

}

// Colors constant
const COLORS = ['red', 'blue', 'green', 'yellow', 'teal', 'black', 'plum', 'saddlebrown', 'pink', 'grey'];
// Random color assigment
function getRandomColor() {
  let randColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  return randColor;
}

function createBoxes() {
  const boxContainer = document.querySelector("#boxContainer");
  let boxesCount = document.querySelector("#boxesCount").value;

  for (let i = 0; i < boxesCount; i++) {
    let divBox = document.createElement("div");
    var boxId = 1 + i;
    divBox.innerHTML = boxId;
    divBox.id = boxId;
    divBox.classList.add("boxclass");
    divBox.classList.add(getRandomColor());
    //divBox.classList.add(getNewRandomClass(i % 4));
    //divBox.classList.add("default");
    divBox.addEventListener('click', flipBox);
    divBox.addEventListener('click', checkForBoxMatch);
    boxContainer.appendChild(divBox);
  }
  document.querySelector('#boxesCount').value = '';
}

// function getNewRandomClass(index) {
//   var myArray = ['redClass', 'blueClass', 'greenClass', 'yellowClass'];
//   //var randClass = myArray[Math.floor(Math.random() * myArray.length)];
//   var randClass = myArray[index];
//   //document.getElementById("myDiv").style.backgroundColor = rand;
//   return randClass;
// }


function checkForBoxMatch() {
  let selectedClassList = this.classList;
  let selectedId = this.id;
  let selectedBox = this;
  var boxes = Array.from(document.getElementsByClassName("boxclass"));
  var matched = false;
  var openBox;
  this.style.backgroundColor = selectedClassList[1];
  boxes.forEach(function (box) {
    if (!box.classList.contains("default") && box.id != selectedId) {
      //if (!(box.style.backgroundColor === 'white') && (box.id != selectedId)) {
      openBox = box;
      matched = (Array.from(selectedClassList).every(e => box.classList.contains(e)));
      if (matched) {
        boxMatch(selectedBox, openBox);
      } else {
        boxMismatch(selectedBox, openBox);
      }
    }
  });
}

function boxMatch(selectedBox, openBox) {
  if (selectedBox.id !== openBox.id) {
    selectedBox.style.pointerEvents = 'none';
    //selectedBox.classList.add("matchedBox");
    openBox.style.pointerEvents = 'none';
    //openBox.classList.add("matchedBox");
  }
}
function boxMismatch(selectedBox, openBox) {
  if ((selectedBox.id !== openBox.id)
    //&& (!(selectedBox.classList.contains("matchedBox") || openBox.classList.contains("matchedBox")))
    && (!(selectedBox.style.pointerEvents === 'none' || openBox.style.pointerEvents === 'none'))
  ) {
    selectedBox.classList.add("default");
    selectedBox.style.backgroundColor = '';
    openBox.style.backgroundColor = '';
    openBox.classList.add("default");
  }
}