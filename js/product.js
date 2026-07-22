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
const shareButton = document.querySelector(".product-share");
const shareMessage = document.querySelector(".share-message");

const queryString = window.location.search;

const searchParams = new URLSearchParams(queryString);
const productId = searchParams.get("id");

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

  if (product.discountedPrice < product.price) {
    discountedPrice.textContent = `$${product.discountedPrice}`;
    productPrice.classList.add("standard-price");
  }

  productRating.textContent = `★ ${product.rating}/5`;

  product.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    productTags.appendChild(tagElement);
  });

  product.reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    const username = document.createElement("h3");
    username.textContent = review.username;

    const rating = document.createElement("p");
    rating.textContent = `★ ${review.rating}`;

    const description = document.createElement("p");
    description.textContent = review.description;

    reviewElement.appendChild(username);
    reviewElement.appendChild(rating);
    reviewElement.appendChild(description);

    reviewsContainer.appendChild(reviewElement);
  });
}

fetchProduct();

shareButton.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);

  shareMessage.textContent = "Link copied";

  setTimeout(() => {
    shareMessage.textContent = "";
  }, 2500);
});
