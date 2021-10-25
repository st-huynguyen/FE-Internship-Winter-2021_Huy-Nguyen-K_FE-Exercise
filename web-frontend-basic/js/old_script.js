// const LOCAL_STORAGE_KEY = "products";

// // Products data
// const products = [
//   {
//     id: "SP01",
//     name: "T-Shirt Summer Vibes",
//     imgUrl: "./assets/product-1.jpg",
//     price: 119.99,
//     discount: 30,
//     color: "White",
//     size: "XL",
//   },
//   {
//     id: "SP02",
//     name: "Loose Knit 3/4 Sleeve",
//     imgUrl: "./assets/product-2.jpg",
//     price: 119.99,
//     discount: 0,
//     color: "White",
//     size: "XL",
//   },
//   {
//     id: "SP03",
//     name: "Basic Slim Fit T-Shirt",
//     imgUrl: "./assets/product-3.jpg",
//     price: 79.99,
//     discount: 0,
//     color: "Black",
//     size: "L",
//   },
//   {
//     id: "SP04",
//     name: "Loose Textured T-Shirt",
//     imgUrl: "./assets/product-4.jpg",
//     price: 119.99,
//     discount: 0,
//     color: "Green",
//     size: "M",
//   },
// ];

// // Render list of products on homepage
// const renderListProductsInToday = () => {
//   const productsContainerE = document.querySelector(".products-list");
//   products.forEach((product) => {
//     const newPrice = (product.price * (100 - product.discount) * 0.01).toFixed(
//       2
//     );
//     const html = `
//       <li class="col-3">
//         <div class="card card-product" data-id=${product.id}>
//           <button class="btn btn-add-to-cart none">Add to cart</button>
//           <img
//             class="card-img"
//             alt=${product.name}
//             src=${product.imgUrl}
//           />
//           <h4 class="card-name">${product.name}</h4>
//           ${
//             product.discount
//               ? `
//             <p class="price">
//               <span class="price new-price">$${newPrice}</span>
//               <span class="price old-price">$${product.price}</span>
//             </p>
//             <div class="badge">
//               <span>-${product.discount}%</span>
//             </div>`
//               : `<span class="price">$${product.price}</span>`
//           }
//         </div>
//       </li>`;
//     productsContainerE.insertAdjacentHTML("beforeend", html);
//   });
// };
// renderListProductsInToday();

// const calcTotalCost = (productsList) => {
//   return productsList
//     ? +productsList
//         .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
//         .toFixed(2)
//     : 0;
// };

// // Handle click event on "Add item to cart" button
// const addItemToCartHandler = (productData) => {
//   // Get products list from local storage
//   const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
//   const productsList = rawProducts ? JSON.parse(rawProducts) : [];
//   // If product already exists in cart -> increase quantity
//   // If not -> add product to list and product.quantity = 1
//   const existingProduct = productsList.find(
//     (product) => product.id === productData.id
//   );
//   if (existingProduct) {
//     existingProduct.quantity = existingProduct.quantity + 1;
//   } else {
//     productData.quantity = 1;
//     productsList.push(productData);
//   }
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsList));
// };

// // Handle click event on "Remove item from cart" button
// const removeItemToCartHandler = (existingProduct, isRemove = false) => {
//   // Get products list from local storage
//   const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
//   const productsList = rawProducts ? JSON.parse(rawProducts) : [];
//   // If click on remove button -> Remove item from cart
//   if (isRemove) {
//     const newProductsList = productsList.filter(
//       (item) => item.id !== existingProduct.id
//     );
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProductsList));
//     return;
//   }
//   // If click on decrease button -> product.quantity -1
//   if (existingProduct.quantity === 1) return;
//   existingProduct.quantity = existingProduct.quantity - 1;
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsList));
// };

// // Show "Add to cart" button when hover
// const renderAddToCartButton = () => {
//   const productCardListE = document.querySelectorAll(".card-product");
//   productCardListE.forEach((product) => {
//     const addToCartButton = product.querySelector(".btn-add-to-cart");
//     if (!addToCartButton) return;
//     product.addEventListener("mouseover", (event) => {
//       addToCartButton.classList.remove("none");
//     });
//     product.addEventListener("mouseout", (event) => {
//       addToCartButton.classList.add("none");
//     });

//     // Handle click event on "Add to cart" button
//     addToCartButton.addEventListener("click", (event) => {
//       const id = event.target.closest("div").dataset.id;
//       const productData = products.find((product) => product.id === id);
//       addItemToCartHandler(productData);
//       rerenderListProducts();
//     });
//   });
// };

// renderAddToCartButton();

// // Toggle UI
// const toggleCartButtonE = document.querySelector(".btn-toggle-cart");
// toggleCartButtonE.addEventListener("click", () => {
//   document.querySelector("header").classList.toggle("none");
//   document.querySelector("main").classList.toggle("none");
//   document.querySelector("footer").classList.toggle("none");
//   document.querySelector(".section-cart").classList.toggle("none");
// });

// const renderCartUI = () => {
//   const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
//   const productsList = rawProducts ? JSON.parse(rawProducts) : null;
//   const html = `
//     <section class="section-cart none">
//       <div class="container">
//         <h3 class="section-title">Shopping cart</h3>
//         <ul class="cart-products">
//           <li class="cart-title">List</li>
//         </ul>
//         <div class="cart-actions"></div>
//         <div class="cart-progress">${calcTotalCost(productsList)}</div>
//       </div>
//     </section>
//   `;
//   document.body.insertAdjacentHTML("beforeend", html);
// };
// renderCartUI();

// const renderListProducts = () => {
//   const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
//   const productsList = rawProducts ? JSON.parse(rawProducts) : null;
//   if (!productsList) return;
//   console.log("ok");
//   productsList.forEach((product, i) => {
//     const html = `
//     <li>
//       <div class="card card-cart" data-id=${product.id}>
//         <div class="card-img-box">
//           <img
//             class="card-img"
//             alt=${product.name}
//             src=${product.imgUrl}
//           />
//         </div>
//         <h4 class="card-name">${product.name}</h4>
//         <span class="cart-color">${product.color}</span>
//         <span class="cart-size">${product.size}</span>
//         <span class="cart-amount-form">
//           <button class="btn btn-cart-minus">-</button>
//           <span class="cart-amount">${product.quantity}</span>
//           <button class="btn btn-cart-plus">+</button>
//         </span>
//         <span class="price">$${product.price}</span>
//         <button class="btn btn-cart-remove">x</button>
//       </div>
//     </li>
//   `;

//     const productsContainerE = document.querySelector(".cart-products");
//     productsContainerE.insertAdjacentHTML("beforeend", html);

//     const increaseItemButton = document.querySelectorAll(".btn-cart-plus");
//     const decreaseItemButton = document.querySelectorAll(".btn-cart-minus");
//     const removeItemButton = document.querySelectorAll(".btn-cart-remove");
//     increaseItemButton[i].addEventListener("click", (event) => {
//       const id = event.target.closest("div").dataset.id;
//       const productData = products.find((product) => product.id === id);
//       addItemToCartHandler(productData);
//       // rerenderListProducts();
//       const quantityE = document.querySelectorAll(".cart-amount")[i];
//       quantityE.innerHTML = +quantityE.innerHTML + 1;
//       // quantityE.innerHTML = +quantityE.innerHTML + 1;
//       // rerenderQuantity(quantityE, 10);
//       renderTotalCost();
//     });

//     decreaseItemButton[i].addEventListener("click", (event) => {
//       const id = event.target.closest("div").dataset.id;
//       const existingProduct = productsList.find((product) => product.id === id);
//       removeItemToCartHandler(existingProduct);
//       const quantityE = document.querySelectorAll(".cart-amount")[i];
//       quantityE.innerHTML = +quantityE.innerHTML - 1;
//       // rerenderListProducts();
//       renderTotalCost();
//     });

//     removeItemButton[i].addEventListener("click", (event) => {
//       const id = event.target.closest("div").dataset.id;
//       const existingProduct = productsList.find((product) => product.id === id);
//       removeItemToCartHandler(existingProduct, true);
//       rerenderListProducts();
//       renderTotalCost();
//     });
//   });
// };

// renderListProducts();

// const rerenderListProducts = () => {
//   const productsContainerE = document.querySelector(".cart-products");
//   productsContainerE.innerHTML = "";
//   productsContainerE.insertAdjacentHTML(
//     "beforeend",
//     '<li class="cart-title">List</li>'
//   );
//   renderListProducts();
// };

// const renderTotalCost = () => {
//   const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
//   const productsList = rawProducts ? JSON.parse(rawProducts) : null;
//   document.querySelector(".cart-progress").innerHTML = calcTotalCost(
//     productsList
//   );
// };
