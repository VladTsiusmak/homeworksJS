document.write(`<div  class='users-box'>`);
for (const user of usersList) {
    document.write(`
        <div  class='user-box'>
        <h2>${user.id} – ${user.name} – ${user.username}</h2>
        <h3>${user.email} – ${user.phone}</h3>`);

    const userAddress = user.address;
    if(userAddress) {
        document.write(`<div class="address-block">
         <p>City – ${userAddress.city}</p>
         <p>Street – ${userAddress.street}</p>
         <p>Suite – ${userAddress.suite}</p>
         <p>Zip code – ${userAddress.zipcode}</p>
 </div>`)
        document.write(`</div>`);
    }
}
document.write(`</div>`);
