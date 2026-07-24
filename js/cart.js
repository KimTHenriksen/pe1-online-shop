/* DOM */
const cartItems = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const totalPrice = document.querySelector(".total-price");

/* Cart */
const cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

cart.forEach((product) => {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const image = document.createElement("img");
  image.src = product.image.url;
  image.alt = product.image.alt;

  cartItem.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = product.title;

  cartItem.appendChild(title);

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  cartItem.appendChild(price);

  cartItems.appendChild(cartItem);
});
