// Const
const LOCAL_STORAGE_KEY = "products";

// Products data
const products = [
  {
    id: "SP01",
    name: "T-Shirt Summer Vibes",
    imgUrl: "./assets/product-1.jpg",
    price: 119.99,
    discount: 30,
    color: "White",
    size: "XL",
  },
  {
    id: "SP02",
    name: "Loose Knit 3/4 Sleeve",
    imgUrl: "./assets/product-2.jpg",
    price: 119.99,
    discount: 0,
    color: "White",
    size: "XL",
  },
  {
    id: "SP03",
    name: "Basic Slim Fit T-Shirt",
    imgUrl: "./assets/product-3.jpg",
    price: 79.99,
    discount: 0,
    color: "Black",
    size: "L",
  },
  {
    id: "SP04",
    name: "Loose Textured T-Shirt",
    imgUrl: "./assets/product-4.jpg",
    price: 119.99,
    discount: 0,
    color: "Green",
    size: "M",
  },
];

// Render list of products
const productsContainerE = document.querySelector(".products-list");
products.forEach((product) => {
  const newPrice = (product.price * (100 - product.discount) * 0.01).toFixed(2);
  const html = `
    <li class="col-3">
      <div class="card card-product" data-id=${product.id}>
        <button class="btn btn-add-to-cart none">Add to cart</button>
        <img
          class="card-img"
          alt=${product.name}
          src=${product.imgUrl}
        />
        <h4 class="card-name">${product.name}</h4>
        ${
          product.discount
            ? `
            <p class="price">
              <span class="price new-price">$${newPrice}</span>
              <span class="price old-price">$${product.price}</span>
            </p>
            <div class="badge">
              <span>-${product.discount}%</span>
            </div>`
            : `<span class="price">$${product.price}</span>`
        }
      </div>
    </li>`;
  productsContainerE.insertAdjacentHTML("beforeend", html);
});

// Handle click event on "Add to cart" button
const addItemToCartHandler = (event) => {
  const id = event.target.closest("div").dataset.id;
  const productData = products.find((product) => product.id === id);
  console.log(productData);

  // Calculate quanlity and price???

  // Local storage
  const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  productsList.push(productData);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsList));
};

const productCardListE = document.querySelectorAll(".card-product");
productCardListE.forEach((product) => {
  const addToCartButton = product.querySelector(".btn-add-to-cart");
  if (!addToCartButton) return;

  // Show "Add to cart" button when hover
  product.addEventListener("mouseover", (event) => {
    addToCartButton.classList.remove("none");
  });
  product.addEventListener("mouseout", (event) => {
    addToCartButton.classList.add("none");
  });

  // Handle click event on "Add to cart" button
  addToCartButton.addEventListener("click", addItemToCartHandler);
});
