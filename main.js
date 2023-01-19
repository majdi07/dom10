// like 

let hearts = document.getElementsByClassName("fa-heart ");
//console.log(heart);

for (let heart of hearts) {
    console.log(heart);
    heart.addEventListener("click", function () {
        heart.classList.add("red");
        // console.log(heart)
    })
}

// remove 

let trashs = document.getElementsByClassName("fa-trash");
//console.log(trashs);
for (let trash of trashs) {
    trash.addEventListener("click", function () {
        trash.parentElement.remove()
    })
}

/*
function somme() {
    let sum = 0;
    let price = document.getElementsByClassName("price");
    let qtys = document.getElementsByClassName("quantity");
    for (let i = 0; i < qtys.length; i++) {
        sum += qtys[i].innerHTML * price[i].innerHTML;
    }
    console.log(sum)
    document.getElementById('para_Total').innerHTML = "Shopping Bag Total  : $" + sum;
    // total 
    let total = document.getElementById("paragraphe-total").innerHTML = sum();
    console.log(total);
}

*/

// plus

let pluss = document.getElementsByClassName("fa-plus");
//console.log(pluss);

for (let plus of pluss) {
    //console.log(plus);
    plus.addEventListener("click", function () {
        plus.nextElementSibling.innerHTML++;

    })

}
//moin

let moins = document.getElementsByClassName("fa-minus");

for (let moin of moins) {
    //console.log(plus);
    moin.addEventListener("click", function () {
        if (moin.previousElementSibling.innerHTML > 0) {
            moin.previousElementSibling.innerHTML--;
        }


    })
}