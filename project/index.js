
var btnDessert = document.getElementById('btn-dessert')
var dessert = document.getElementById('dessert')
var dinner = document.getElementById('dinner')
var cheese = document.getElementById('cheese')
var drinks = document.getElementById('drinks')
var btnCheese = document.getElementById('btn-cheese')
var btnDrinks = document.getElementById('btn-drinks')
var btnDinner = document.getElementById('btn-dinner')

btnDessert.addEventListener('click', function () {
  dessert.style.display="block"
  dinner.style.display="none"
  cheese.style.display="none"
  drinks.style.display="none"
  btnDinner.className = "btn btn-outline-success";
  btnDrinks.className = "btn btn-outline-success";
  btnCheese.className = "btn btn-outline-success";
  btnDessert.className = "btn btn-outline-success active";
})


btnDinner.addEventListener('click', function () {
  dessert.style.display="none"
  dinner.style.display="block"
  cheese.style.display="none"
  drinks.style.display="none"
  btnDessert.className = "btn btn-outline-success";
  btnDrinks.className = "btn btn-outline-success";
  btnCheese.className = "btn btn-outline-success";
  btnDinner.className = "btn btn-outline-success active";
})

btnCheese.addEventListener('click', function () {
  dessert.style.display="none"
  dinner.style.display="none"
  cheese.style.display="block"
  drinks.style.display="none"
  btnDessert.className = "btn btn-outline-success";
  btnDrinks.className = "btn btn-outline-success";
  btnDinner.className = "btn btn-outline-success";
  btnCheese.className = "btn btn-outline-success active";
})

btnDrinks.addEventListener('click', function () {
  dessert.style.display="none"
  dinner.style.display="none"
  cheese.style.display="none"
  drinks.style.display="block"
  btnDessert.className = "btn btn-outline-success";
  btnDinner.className = "btn btn-outline-success";
  btnCheese.className = "btn btn-outline-success";
  btnDrinks.className = "btn btn-outline-success active";
})