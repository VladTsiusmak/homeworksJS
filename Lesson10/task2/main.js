let button = document.getElementById('button');
button.onclick = function (ev) {
    ev.preventDefault();
    let age = document.getElementById('age');
    if (Number(age.value) < 18) {
        console.log('Повертайся , коли виповниться 18!');
    } else {
        console.log('Тобі вже 18!')
    }
}
