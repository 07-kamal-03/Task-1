/**
 * Drop Down JavaScript
 */
document.getElementById("btn").onclick = function () {
    myfunction();
    
};
function myfunction() {
    document.getElementById("menu").classList.toggle("show");
}
/**
 * Content Changing JavaScript
 */
var pizzakey = document.getElementById("pizza1");
var burgerkey = document.getElementById("burger1");
var snackskey = document.getElementById("snacks1");
var saladkey = document.getElementById("salad1");
var drinkkey = document.getElementById("drink1");
var pizza_tab = document.getElementById("pizza-tab");
var burger_tab = document.getElementById("burger-tab");
var snacks_tab = document.getElementById("snacks-tab");
var salad_tab = document.getElementById("salad-tab");
var drink_tab = document.getElementById("drink-tab");

function showPizza() {
    pizzakey.style.color = "orange";
    burgerkey.style.color = "#000";
    snackskey.style.color = "#000";
    saladkey.style.color = "#000";
    drinkkey.style.color = "#000";
    pizza_tab.style.transform = "translateX(0px)";
    burger_tab.style.transform = "translateX(150%)";
    snacks_tab.style.transform = "translateX(150%)";
    salad_tab.style.transform = "translateX(150%)";
    drink_tab.style.transform = "translateX(150%)";
    myfunction();

}
function showBurger() {
    pizzakey.style.color = "#000";
    burgerkey.style.color = "orange";
    snackskey.style.color = "#000";
    saladkey.style.color = "#000";
    drinkkey.style.color = "#000";
    pizza_tab.style.transform = "translateX(150%)";
    burger_tab.style.transform = "translateX(0px)";
    snacks_tab.style.transform = "translateX(150%)";
    salad_tab.style.transform = "translateX(150%)";
    drink_tab.style.transform = "translateX(150%)";
    myfunction();
}
function showSnacks() {
    pizzakey.style.color = "#000";
    burgerkey.style.color = "#000";
    snackskey.style.color = "#orange";
    saladkey.style.color = "#000";
    drinkkey.style.color = "#000";
    pizza_tab.style.transform = "translateX(150%)";
    burger_tab.style.transform = "translateX(150%)";
    snacks_tab.style.transform = "translateX(0px)";
    salad_tab.style.transform = "translateX(150%)";
    drink_tab.style.transform = "translateX(150%)";
    myfunction();
}
function showSalad() {
    pizzakey.style.color = "#000";
    burgerkey.style.color = "#000";
    snackskey.style.color = "#000";
    saladkey.style.color = "orange";
    drinkkey.style.color = "#000";
    pizza_tab.style.transform = "translateX(150%)";
    burger_tab.style.transform = "translateX(150%)";
    snacks_tab.style.transform = "translateX(150%)";
    salad_tab.style.transform = "translateX(0px)";
    drink_tab.style.transform = "translateX(150%)";
    myfunction();
}
function showDrink() {
    pizzakey.style.color = "#000";
    burgerkey.style.color = "#000";
    snackskey.style.color = "#000";
    saladkey.style.color = "#000";
    drinkkey.style.color = "orange";
    pizza_tab.style.transform = "translateX(150%)";
    burger_tab.style.transform = "translateX(150%)";
    snacks_tab.style.transform = "translateX(150%)";
    salad_tab.style.transform = "translateX(150%)";
    drink_tab.style.transform = "translateX(0px)";
    myfunction();
}
