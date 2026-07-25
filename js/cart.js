/* DOM */
const cartItems = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const totalPrice = document.querySelector(".total-price");

/* Cart */
const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

/* Update total */
function updateTotal() {
  total = 0;

  cart.forEach((product) => {
    total += product.price * product.quantity;
  });

  subtotal.textContent = `$${total.toFixed(2)}`;
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

/* Render Cart */

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

  const quantity = document.createElement("p");
  quantity.textContent = `Quantity: ${product.quantity}`;
  cartItem.appendChild(quantity);

  const decreaseButton = document.createElement("button");
  decreaseButton.textContent = "-";
  cartItem.appendChild(decreaseButton);

  const increaseButton = document.createElement("button");
  increaseButton.textContent = "+";
  cartItem.appendChild(increaseButton);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  cartItem.appendChild(removeButton);

  removeButton.addEventListener("click", () => {
    const updatedCart = cart.filter((item) => item.id !== product.id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    location.reload();
  });

  increaseButton.addEventListener("click", () => {
    product.quantity++;

    quantity.textContent = `Quantity: ${product.quantity}`;

    localStorage.setItem("cart", JSON.stringify(cart));

    updateTotal();
  });

  decreaseButton.addEventListener("click", () => {
    if (product.quantity > 1) {
      product.quantity--;

      quantity.textContent = `Quantity: ${product.quantity}`;

      localStorage.setItem("cart", JSON.stringify(cart));

      updateTotal();
    }
  });

  cartItems.appendChild(cartItem);
});

updateTotal();
