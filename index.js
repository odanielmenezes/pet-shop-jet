var cartBtn = document.querySelector("#cart-button");
var cartNumberItems = document.querySelectorAll(".cart-item");
var modalKey;
const select = (elemento) => document.querySelector(elemento);
const seletAll = (elemento) => document.querySelectorAll(elemento);
const cart = [];

document.querySelector("#menu-actions-number-items").innerHTML =
  document.querySelectorAll("#cart-item").length - 1;

var acaoBotao = function (index) {
  return function () {
    modalKey = index;
  };
};

var botoes = document.querySelectorAll(".button-add-cart");
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", acaoBotao(i), false);
}

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

function btnComprar() {
  document.querySelector("#menu-actions-number-items").innerHTML =
    document.querySelectorAll("#cart-item").length;
  console.log(modalKey);

  let productsInCart = seletAll(".cart-items");
  console.log(productsInCart);

  let produto = produtosJson.filter((e) => e.id === modalKey);
  if (produto.length > 0) {
    let produtoItem = select(".cart .cart-items .cart-item").cloneNode(true);
    select(".cart-items").append(produtoItem);
    select(".cart-item-img img").src = produto[0].image;
    select(".cart-item .cart-items-infos .cart-items-infos-name").innerHTML =
      produto[0].name;
    select(".cart-item .cart-items-infos .cart-items-infos-price").innerHTML =
      produto[0].price;
    // select(".cart-item .cart-items-infos .cart-items-infos-quantity").innerHTML =
  }
}
