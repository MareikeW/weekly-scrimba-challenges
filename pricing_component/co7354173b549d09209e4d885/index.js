/* When clicked, the selected card should enlarge (up to you how much) and the price should have a color of #ffd60a*/
/* The non-selected cards should reduce in opacity */

const btnCat = document.getElementById("button--cat");
const btnLion = document.getElementById("button--lion");
const btnTiger = document.getElementById("button--tiger");
const prices = document.getElementsByClassName("price");
const cards = document.getElementsByClassName("card");
let i;

btnCat.addEventListener("click", () => toggleSelect(0));
btnLion.addEventListener("click", () => toggleSelect(1));
btnTiger.addEventListener("click", () => toggleSelect(2));

function toggleSelect(num) { 
    for (let i = 0; i < prices.length; i++) {
        if (i === num) {
            prices[i].classList.toggle("selected");
            cards[i].classList.toggle("selected");
            cards[i].classList.remove("unselected");
        }         
        else {
            prices[i].classList.remove("selected");
            cards[i].classList.remove("selected");
            cards[i].classList.add("unselected");
        }
    }
    
    if (!cards[num].classList.contains("selected"))
    {
        for (let i = 0; i < prices.length; i++) {
            cards[i].classList.remove("unselected");
        }  
    }    
}
