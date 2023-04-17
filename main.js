let smallEl = document.getElementById("small");
let mediumEl = document.getElementById("medium");
let largeEl = document.getElementById("large");

let displaypriceEl = document.getElementById("displayprice");
let toppingsEl = document.getElementById("toppings");

function submit() {
    let price = 0;
    if (smallEl.checked) {
        price += 7;
    }

    if (mediumEl.checked) {
        price += 10;
    }

    if (largeEl.checked) {
        price += 14;
    }

    if (toppingsEl.selectedIndex == 1) {
        price += 2;
    }

    if (toppingsEl.selectedIndex == 2) {
        price += 3;
    }

    
    displaypriceEl.innerHTML = "$"+ price;
}

