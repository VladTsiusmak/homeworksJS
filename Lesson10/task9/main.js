//   #bq1zkx7WP
//   *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//           При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let price = +(localStorage.getItem('price') ?? 100);
let lastUpdate = +(localStorage.getItem('lastUpdate') ?? 0);

if (Date.now() - lastUpdate > 10000) {
    price = price + 10;
    localStorage.setItem('price', price);
    localStorage.setItem('lastUpdate', Date.now());
}
let div = document.getElementById('target').innerText = `${price} грн`;
