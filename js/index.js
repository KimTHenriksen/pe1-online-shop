const API_URL = "https://v2.api.noroff.dev/online-shop";

const gridProductsIds = [
  "159fdd2f-2b12-46de-9654-d9139525ba87",
  "3b43b2e4-62b0-4c02-9166-dffa46a0388c",
  "be5e376d-e657-4035-8916-1580c52f4e98",
  "f6712e3b-8050-4841-bd64-f332a48f7566",
  "3f328f02-715e-477f-9738-7934af4bc5b0",
  "894ca18f-9725-40b3-9429-1420ee2054da",
  "7238397e-0ee5-4d5c-9e82-bda666dd2470",
  "5aa2e388-8dfb-4d70-b031-3732d8c6771a",
  "f5d453d1-e811-4225-81ac-cee54ef0384b",
  "95dc28de-9ef6-4c67-808b-6431a5de43e8",
  "ce5b64e3-440d-46e5-952f-bfdbad8a48d2",
  "31e3a66f-2dbe-47ae-b80d-d9e5814f3e32",
];

const carouselProductsIds = [
  "159fdd2f-2b12-46de-9654-d9139525ba87",
  "be5e376d-e657-4035-8916-1580c52f4e98",
  "31e3a66f-2dbe-47ae-b80d-d9e5814f3e32",
];

const productGrid = document.querySelector(".grid-products");
const carouselBox = document.querySelector(".carousel-box");

function rendergridProducts(products) {
  productGrid.innerHTML = "";

  const gridProducts = products.filter((product) =>
    gridProductsIds.includes(product.id),
  );

  gridProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.image.url;
    image.alt = product.image.alt;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    const button = document.createElement("button");
    button.textContent = "View Product";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    productGrid.appendChild(card);
  });
}

function renderCarousel(products) {
  carouselBox.innerHTML = "";

  carouselProductsIds.forEach((id) => {
    const product = products.find((product) => product.id === id);

    const card = document.createElement("div");
    card.classList.add("carousel-card");

    const image = document.createElement("img");
    image.src = product.image.url;
    image.alt = product.image.alt;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    const button = document.createElement("button");
    button.textContent = "View Product";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);
    carouselBox.appendChild(card);
  });
}

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    renderCarousel(data.data);
    rendergridProducts(data.data);
  } catch (error) {
    console.error(error);
  }
}

fetchProducts();
