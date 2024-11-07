let mobiles = document.getElementById("mobile");
let laptops = document.getElementById("laptop");
let items = document.querySelectorAll(".item:nth-child(2)");

// items.style.color = 'red'

for (let i = 0; i < items.length; i++){
    items[i].style.color = 'red'
}