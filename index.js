var cartBtn = document.querySelector("#cart-button");
var cartNumberItems = document.querySelectorAll(".cart-item");

document.querySelector("#menu-actions-number-items").innerHTML =
  cartNumberItems.length;

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
  console.log(cartNumberItems);
  cartNumberItems.appendChild('AAAAAAAAA')
}
