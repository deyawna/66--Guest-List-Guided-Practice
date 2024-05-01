let guests = [];
let addButton = document.querySelector(".addButton");
let guestList = document.querySelector(".guestList");
let number = document.querySelector(".number");

addButton.onclick = function() {
    let guestInput = document.querySelector(".guestName").value;
    // Write your code below! 
guests.push(guestInput);
    console.log(guests);
 console.log(guests.length);
    guestList.innerHTML = "";
    for (let guest of guests) {
    guestList.insertAdjacentHTML("beforeend", "<li>" + guest + "</li>");
   }
};