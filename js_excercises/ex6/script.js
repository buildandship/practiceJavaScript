document.addEventListener('DOMContentLoaded', () => {
    let url = prompt('Please enter URL');
    console.log(url);
    if (url === '' || typeof url === undefined) {
        alert('No Url entered');
    } else {
        console.log(url);
        let win = window.open(url, '_blank', 'location=yes,height=450px,width=400px,scrollbars=no,status=no');
        console.log(win);
    }
});
// TODO: Fix for chrome for scrollbars