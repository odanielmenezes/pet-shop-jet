var cartBtn = document.querySelector("#cart-button");
var cartNumberItems = document.querySelectorAll(".cart-item");
let modalKey = 0
const select = (elemento) => document.querySelector(elemento)
const seletAll = (elemento) => document.querySelectorAll(elemento)
const cart = []

document.querySelector('#menu-actions-number-items').innerHTML =
  document.querySelectorAll('#cart-item').length - 1;

function openModal() {
  if (document.querySelector("#cart").classList.length > 1) {
    document.querySelector("#cart").classList.remove("cart-open");
    document
      .querySelector("#background-opacity")
      .classList.remove("background-opacity-open");
  } else {
    document.querySelector("#cart").classList.add("cart-open");
    document
      .querySelector("#background-opacity")
      .classList.add("background-opacity-open");
  }
}

var acaoBotao = function (index) {
  return function(){
   console.log('indexxxxxxxx', index) 
  }
};


function btnComprar() {

    var botoes = document.getElementsByClassName("button-add-cart");
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].addEventListener('click', acaoBotao(i), false);
    }

  let produtoItem = select('.cart .cart-items .cart-item').cloneNode(true)

  select('.cart-items').append(produtoItem)
  // select('.cart-item-img img').src = 'item.image'
  select('.cart-item .cart-items-infos .cart-items-infos-name').innerHTML = 'item.name'
  select('.cart-item .cart-items-infos .cart-items-infos-price').innerHTML = 'item.price'
}

