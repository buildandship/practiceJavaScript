// let count = 0;
// const recurse = () => {
//     if (count === 2) return 'DONE';
//     count++;
//     console.log(count);
//     return recurse();
// }
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//let output = '';
let repeater = (input, repeat) => {
    console.log(input);
    if (input.length === repeat) {
        return input;
    }
    input += input;
    return repeater(input, repeat);
}
///////////////////////////////////////////////////////////////////////////////