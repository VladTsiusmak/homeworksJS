//#NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

const users = [];

for(let i = 0; i < 100; i++) {
    const user = {
        id: i,
        name: `User №${i + 1}`
    }
    users.push(user);
}

let div = document.getElementById('wrapper');
let currentPage = 0;

let paginationUsers = function (array) {
    div.innerHTML = '';
    const start = currentPage * 10;
    const end = start + 10;
    const tenUsers = array.slice(start, end);

    for(let user of tenUsers) {
        const pElem = document.createElement('p');
        pElem.innerHTML = `ID: ${user.id}, Name: ${user.name}`;
        div.appendChild(pElem);
    }
}

paginationUsers(users);

const form = document.forms.buttons;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const clickedButton = event.submitter;

    if (clickedButton.value === 'next') {
        if((currentPage + 1) * 10 <= users.length) {
            currentPage++;
            paginationUsers(users);
        }
    }else if (clickedButton.value === 'prev') {
        if(currentPage > 0) {
            currentPage--;
            paginationUsers(users);
        }
    }
});
