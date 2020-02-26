let fname = prompt('Enter first name: ');
let lname = prompt('Enter last name: ');
console.log(fname);
console.log(lname);
//if (!((fname !== "" || (typeof fname !== undefined)) && (lname !== "" || (typeof lname !== undefined)))) {
if ((fname) && (lname)) {
    let msg = 'Hello ' + fname + ' ' + lname;
    alert(msg);
    document.write(msg)
}

