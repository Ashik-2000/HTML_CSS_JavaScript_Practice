let mobiles = document.getElementById("mobile");
let laptops = document.getElementById("laptop");
let items = laptops.getElementsByClassName("item");

for (let i = 0; i < items.length; i++){
    items[i].style.color = 'red'
}