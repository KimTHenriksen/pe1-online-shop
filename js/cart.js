/* DOM */
const cartItems = document.querySelector(".cart-items");
const subtotal = document.querySelector(".subtotal");
const totalPrice = document.querySelector(".total-price");
const clearCartButton = document.querySelector(".clear-cart-button");
const cartSummary = document.querySelector(".cart-summary");

/* Cart */
const cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length === 0) {
  cartItems.textContent = "Your cart is empty.";
  cartSummary.style.display = "none";
} else {
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

    /* Image */
    const image = document.createElement("img");
    image.src = product.image.url;
    image.alt = product.image.alt;
    cartItem.appendChild(image);

    /* Cart Info */
    const cartInfo = document.createElement("div");
    cartInfo.classList.add("cart-info");

    /* Title */
    const title = document.createElement("h2");
    title.textContent = product.title;
    cartInfo.appendChild(title);

    /* Price */
    const price = document.createElement("p");
    price.classList.add("cart-price");
    price.textContent = `$${product.price}`;
    cartInfo.appendChild(price);

    /* Quantity */
    const quantityLabel = document.createElement("p");
    quantityLabel.textContent = "Quantity";

    const quantitySection = document.createElement("div");
    quantitySection.classList.add("quantity-section");
    quantitySection.appendChild(quantityLabel);

    const cartQuantity = document.createElement("div");
    cartQuantity.classList.add("cart-quantity");

    const quantityButtons = document.createElement("div");
    quantityButtons.classList.add("quantity-buttons");

    const decreaseButton = document.createElement("button");
    decreaseButton.classList.add("quantity-button");
    decreaseButton.textContent = "-";

    const quantityValue = document.createElement("div");
    quantityValue.classList.add("quantity-value");
    quantityValue.textContent = product.quantity;

    const increaseButton = document.createElement("button");
    increaseButton.classList.add("quantity-button");
    increaseButton.textContent = "+";

    quantityButtons.appendChild(decreaseButton);
    quantityButtons.appendChild(quantityValue);
    quantityButtons.appendChild(increaseButton);

    /* Remove Button */
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";

    cartQuantity.appendChild(quantityButtons);
    cartQuantity.appendChild(removeButton);

    quantitySection.appendChild(cartQuantity);
    cartInfo.appendChild(quantitySection);
    cartItem.appendChild(cartInfo);
    cartItems.appendChild(cartItem);

    /* Event Listeners */
    removeButton.addEventListener("click", () => {
      const updatedCart = cart.filter((item) => item.id !== product.id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      location.reload();
    });

    increaseButton.addEventListener("click", () => {
      product.quantity++;

      quantityValue.textContent = product.quantity;

      localStorage.setItem("cart", JSON.stringify(cart));

      updateTotal();
    });

    decreaseButton.addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity--;

        quantityValue.textContent = product.quantity;

        localStorage.setItem("cart", JSON.stringify(cart));

        updateTotal();
      }
    });
  });

  updateTotal();

  /* Clear Cart */
  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload();
  });
}
