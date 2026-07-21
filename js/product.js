/* API */
const API_URL = "https://v2.api.noroff.dev/online-shop";

/* DOM */
const productImage = document.querySelector(".product-image");
const productTitle = document.querySelector(".product-title");
const productDescription = document.querySelector(".product-description");
const productPrice = document.querySelector(".price");
const discountedPrice = document.querySelector(".discounted-price");
const productRating = document.querySelector(".product-rating");
const productTags = document.querySelector(".product-tags");
const reviewsContainer = document.querySelector(".reviews-container");
const addToCartButton = document.querySelector(".add-to-cart");

const queryString = window.location.search;

const searchParams = new URLSearchParams(queryString);
const productId = searchParams.get("id");

console.log(productId);

async function fetchProduct() {
  const response = await fetch(`${API_URL}/${productId}`);
  const data = await response.json();

  const product = data.data;

  productTitle.textContent = product.title;

  const image = document.createElement("img");
  image.src = product.image.url;
  image.alt = product.image.alt;
  productImage.appendChild(image);

  productDescription.textContent = product.description;

  productPrice.textContent = `$${product.price}`;

  console.log(image.alt);
}

fetchProduct();
