const LOCAL_STORAGE_KEY = 'products';
let onCartpage = false;

// Products data
const products = [
  {
    id: 'SP01',
    name: 'T-Shirt Summer Vibes',
    imgUrl: './assets/product-1.jpg',
    price: 119.99,
    discount: 30,
    color: 'White',
    size: 'XL',
  },
  {
    id: 'SP02',
    name: 'Loose Knit 3/4 Sleeve',
    imgUrl: './assets/product-2.jpg',
    price: 119.99,
    discount: 0,
    color: 'White',
    size: 'XL',
  },
  {
    id: 'SP03',
    name: 'Basic Slim Fit T-Shirt',
    imgUrl: './assets/product-3.jpg',
    price: 79.99,
    discount: 0,
    color: 'Black',
    size: 'L',
  },
  {
    id: 'SP04',
    name: 'Loose Textured T-Shirt',
    imgUrl: './assets/product-4.jpg',
    price: 119.99,
    discount: 0,
    color: 'Green',
    size: 'M',
  },
];

const calcTotalQuantity = (productsList) => {
  return productsList
    ? +productsList.reduce((acc, cur) => acc + cur.quantity, 0).toFixed(2)
    : null;
};

const calcTotalCost = (productsList) => {
  return productsList
    ? +productsList
        .reduce(
          (acc, cur) =>
            acc + cur.price * (100 - cur.discount) * 0.01 * cur.quantity,
          0
        )
        .toFixed(2)
    : 0;
};

// Handle click event on "Add item or increase quantity to cart" button
const addItemToCartHandler = (productData) => {
  const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  const existingProduct = productsList.find(
    (product) => product.id === productData.id
  );
  if (existingProduct) {
    existingProduct.quantity = existingProduct.quantity + 1;
  } else {
    productData.quantity = 1;
    productsList.push(productData);
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsList));
};

// Handle click event on "Remove item or decrease quantity to cart" button
const removeItemToCartHandler = (productData, isRemove = false) => {
  const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  if (isRemove) {
    const newProductsList = productsList.filter(
      (product) => product.id !== productData.id
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newProductsList));
    return;
  }
  const existingProduct = productsList.find(
    (product) => product.id === productData.id
  );
  if (existingProduct.quantity === 1) {
    return;
  } else {
    existingProduct.quantity = existingProduct.quantity - 1;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsList));
};

// Toggle UI
const $toggleCartButton = document.querySelector('.btn-toggle-cart');
// Add quantity badge
const $totalQuantity = document.createElement('span');
$totalQuantity.classList.add('total-quantity');
$totalQuantity.innerHTML = 0;
$toggleCartContainer = $toggleCartButton.closest('li');
$toggleCartContainer.appendChild($totalQuantity);
$toggleCartContainer.classList.add('position-relative');
$toggleCartButton.addEventListener('click', () => {
  onCartpage = !onCartpage;
  document.querySelector('main').classList.toggle('none');
  document.querySelector('footer').classList.toggle('none');
  document.querySelector('.section-cart').classList.toggle('none');
  document.querySelector('header').classList.toggle('header-cart');
  // Update header img to black color
  const $logo = document.querySelector('.navbar-logo-img');
  const $searchButton = document.querySelector('.btn-search');
  const $userButton = document.querySelector('.btn-user');
  const $navLinksList = document.querySelectorAll('.nav-link');
  $navLinksList.forEach((link) => link.classList.toggle('text-black'));
  // If user on cart page
  if (onCartpage) {
    $logo.setAttribute('src', './assets/logo-black.png');
    $searchButton.setAttribute('src', './assets/nav-icon-1-black.png');
    $toggleCartButton.setAttribute('src', './assets/nav-icon-2-black.png');
    $userButton.setAttribute('src', './assets/nav-icon-3-black.png');
    renderProductsList();
    renderTotalCost();
  } else {
    // If user on homepage
    $logo.setAttribute('src', './assets/logo.png');
    $searchButton.setAttribute('src', './assets/nav-icon-1.png');
    $toggleCartButton.setAttribute('src', './assets/nav-icon-2.png');
    $userButton.setAttribute('src', './assets/nav-icon-3.png');
  }
});

// Render list of products on homepage
const renderListProductsInToday = () => {
  const $productsList = document.querySelector('.products-list');
  products.forEach((product) => {
    const $li = document.createElement('li');
    $li.classList.add('col-3');
    $productsList.appendChild($li);

    const $div = document.createElement('div');
    $div.classList.add('card');
    $div.classList.add('card-product');
    $div.setAttribute('data-id', product.id);
    $li.appendChild($div);

    const $button = document.createElement('button');
    $button.classList.add('btn');
    $button.classList.add('btn-add-to-cart');
    $button.classList.add('none');
    $button.innerHTML = 'Add to cart';
    $div.appendChild($button);

    const $img = document.createElement('img');
    $img.classList.add('card-img');
    $img.setAttribute('alt', product.name);
    $img.setAttribute('src', product.imgUrl);
    $div.appendChild($img);

    const $h4 = document.createElement('h4');
    $h4.classList.add('card-name');
    $h4.innerHTML = product.name;
    $div.appendChild($h4);

    if (product.discount) {
      const newPrice = (
        product.price *
        (100 - product.discount) *
        0.01
      ).toFixed(2);

      const $p = document.createElement('p');
      $p.classList.add('price');
      $div.appendChild($p);

      const $spanNewPrice = document.createElement('span');
      $spanNewPrice.classList.add('price');
      $spanNewPrice.classList.add('new-price');
      $spanNewPrice.innerHTML = `$${newPrice}`;
      $p.appendChild($spanNewPrice);

      const $spanOldPrice = document.createElement('span');
      $spanOldPrice.classList.add('price');
      $spanOldPrice.classList.add('old-price');
      $spanOldPrice.innerHTML = `$${product.price}`;
      $p.appendChild($spanOldPrice);

      const $badge = document.createElement('p');
      $badge.classList.add('badge');
      $div.appendChild($badge);

      const $discount = document.createElement('span');
      $discount.innerHTML = `-${product.discount}%`;
      $badge.appendChild($discount);
    } else {
      const $span = document.createElement('span');
      $span.classList.add('price');
      $span.innerHTML = `$${product.price}`;
      $div.appendChild($span);
    }

    $div.addEventListener('mouseover', (event) => {
      $button.classList.remove('none');
    });
    $div.addEventListener('mouseout', (event) => {
      $button.classList.add('none');
    });
    $button.addEventListener('click', () => {
      addItemToCartHandler(product);
      renderTotalQuantity();
    });
  });
};

// Render cart page
const renderCartPage = () => {
  const $section = document.createElement('section');
  $section.classList.add('section-cart');
  $section.classList.add('none');
  document.body.appendChild($section);

  const $container = document.createElement('div');
  $container.classList.add('container');
  $section.appendChild($container);

  const $h3 = document.createElement('h3');
  $h3.classList.add('section-title');
  $h3.innerHTML = 'Shopping cart';
  $container.appendChild($h3);

  const $div = document.createElement('div');
  $div.classList.add('row');
  $div.classList.add('cart-thead');
  $container.appendChild($div);

  const $spanProduct = document.createElement('span');
  $spanProduct.classList.add('col-5');
  $spanProduct.innerHTML = 'Product';
  $div.appendChild($spanProduct);

  const $spanColor = document.createElement('span');
  $spanColor.classList.add('col-1');
  $spanColor.innerHTML = 'Color';
  $div.appendChild($spanColor);

  const $spanSize = document.createElement('span');
  $spanSize.classList.add('col-1');
  $spanSize.innerHTML = 'Size';
  $div.appendChild($spanSize);

  const $spanAmount = document.createElement('span');
  $spanAmount.classList.add('col-2');
  $spanAmount.innerHTML = 'Amount';
  $div.appendChild($spanAmount);

  const $spanPrice = document.createElement('span');
  $spanPrice.classList.add('col-2');
  $spanPrice.innerHTML = 'Price';
  $div.appendChild($spanPrice);

  const $ul = document.createElement('ul');
  $ul.classList.add('cart-products');
  $ul.classList.add('row');
  $container.appendChild($ul);

  const $li = document.createElement('li');
  $li.classList.add('cart-title');
  $li.innerHTML = 'List';
  $ul.appendChild($li);

  const $actions = document.createElement('div');
  $actions.classList.add('cart-actions');
  $actions.classList.add('row');
  $container.appendChild($actions);

  const $returnLink = document.createElement('a');
  $returnLink.classList.add('btn');
  $returnLink.classList.add('cart-return-link');
  $returnLink.classList.add('col-4');
  $returnLink.setAttribute('href', '#');
  $returnLink.innerHTML = 'Continue Shopping';
  $actions.appendChild($returnLink);

  const $form = document.createElement('form');
  $form.classList.add('form');
  $form.classList.add('col-3');
  $actions.appendChild($form);

  const $input = document.createElement('input');
  $input.classList.add('form-input');
  $input.placeholder = 'Promo Code';
  $form.appendChild($input);

  const $button = document.createElement('button');
  $button.classList.add('form-btn');
  $button.classList.add('btn');
  $button.innerHTML = '&#10148;';
  $form.appendChild($button);

  const $totalText = document.createElement('span');
  $totalText.classList.add('total-text');
  $totalText.classList.add('col-2');
  $totalText.innerHTML = 'Total cost';
  $actions.appendChild($totalText);

  const $total = document.createElement('span');
  $total.classList.add('total-cost');
  $total.classList.add('col-1');
  $total.classList.add('price');
  $actions.appendChild($total);

  const $checkoutContainer = document.createElement('div');
  $checkoutContainer.classList.add('col-2');
  $checkoutContainer.classList.add('flex');
  $actions.appendChild($checkoutContainer);

  const $checkoutButton = document.createElement('a');
  $checkoutButton.setAttribute('href', '#');
  $checkoutButton.classList.add('btn');
  $checkoutButton.classList.add('btn-primary');
  $checkoutButton.classList.add('btn-checkout');
  $checkoutButton.innerHTML = 'Checkout';
  $checkoutContainer.appendChild($checkoutButton);
};

// Render total cost
const renderTotalCost = () => {
  const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  $total = document.querySelector('.total-cost');
  $total.innerHTML = '$' + calcTotalCost(productsList);
};

// Render total quantity
const renderTotalQuantity = () => {
  const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  $quantity = document.querySelector('.total-quantity');
  $quantity.innerHTML = calcTotalQuantity(productsList);
};

// Render product item
const renderProductItem = (product) => {
  const $container = document.querySelector('.cart-products');
  const $li = document.createElement('li');
  $container.appendChild($li);

  const $card = document.createElement('div');
  $card.classList.add('card');
  $card.classList.add('card-cart');
  $card.classList.add('row');
  $card.setAttribute('data-id', product.id);
  $li.appendChild($card);

  const $div = document.createElement('div');
  $div.classList.add('col-5');
  $div.classList.add('flex-row-i-center');
  $card.appendChild($div);

  const $imgBox = document.createElement('div');
  $imgBox.classList.add('card-img-box');
  $div.appendChild($imgBox);

  const $img = document.createElement('img');
  $img.classList.add('card-img');
  $img.setAttribute('alt', product.name);
  $img.setAttribute('src', product.imgUrl);
  $imgBox.appendChild($img);

  const $headingDiv = document.createElement('div');
  $headingDiv.classList.add('flex-column');
  $div.appendChild($headingDiv);

  const $h4 = document.createElement('h4');
  $h4.classList.add('card-name');
  $h4.innerHTML = product.name;
  $headingDiv.appendChild($h4);

  const $span = document.createElement('span');
  $span.classList.add('cart-id');
  $span.innerHTML = product.id;
  $headingDiv.appendChild($span);

  const $spanColor = document.createElement('span');
  $spanColor.classList.add('cart-color');
  $spanColor.classList.add('col-1');
  $spanColor.innerHTML = product.color;
  $card.appendChild($spanColor);

  const $spanSize = document.createElement('span');
  $spanSize.classList.add('cart-size');
  $spanSize.classList.add('col-1');
  $spanSize.innerHTML = product.size;
  $card.appendChild($spanSize);

  const $amountContainer = document.createElement('div');
  $amountContainer.classList.add('col-2');
  $card.appendChild($amountContainer);

  const $spanAmountForm = document.createElement('span');
  $spanAmountForm.classList.add('cart-amount-form');
  $amountContainer.appendChild($spanAmountForm);

  const $buttonDecrease = document.createElement('button');
  $buttonDecrease.classList.add('btn');
  $buttonDecrease.classList.add('btn-cart-decrease');
  $buttonDecrease.innerHTML = '-';
  $spanAmountForm.appendChild($buttonDecrease);

  const $spanQuantity = document.createElement('span');
  $spanQuantity.classList.add('cart-amount');
  $spanQuantity.innerHTML = product.quantity;
  $spanAmountForm.appendChild($spanQuantity);

  const $buttonIncrease = document.createElement('button');
  $buttonIncrease.classList.add('btn');
  $buttonIncrease.classList.add('btn-cart-increase');
  $buttonIncrease.innerHTML = '+';
  $spanAmountForm.appendChild($buttonIncrease);

  const $spanPrice = document.createElement('span');
  const $spanNewPrice = document.createElement('span');
  const $spanOldPrice = document.createElement('span');
  if (product.discount) {
    $spanNewPrice.classList.add('price');
    $spanNewPrice.classList.add('new-price');
    $spanNewPrice.classList.add('col-1');
    $spanNewPrice.innerHTML =
      '$' +
      (
        product.price *
        (100 - product.discount) *
        0.01 *
        product.quantity
      ).toFixed(2);
    $card.appendChild($spanNewPrice);

    $spanOldPrice.classList.add('price');
    $spanOldPrice.classList.add('old-price');
    $spanOldPrice.classList.add('col-1');
    $spanOldPrice.innerHTML =
      '$' + (product.price * product.quantity).toFixed(2);
    $card.appendChild($spanOldPrice);
  } else {
    $spanPrice.classList.add('price');
    $spanPrice.classList.add('col-2');
    $spanPrice.innerHTML = '$' + (product.price * product.quantity).toFixed(2);
    $card.appendChild($spanPrice);
  }

  const $removeContainer = document.createElement('div');
  $removeContainer.classList.add('col-1');
  $removeContainer.classList.add('flex');
  $card.appendChild($removeContainer);

  const $buttonRemove = document.createElement('button');
  $buttonRemove.classList.add('btn');
  $buttonRemove.classList.add('btn-cart-remove');
  $buttonRemove.innerHTML = '&#10005;';
  $removeContainer.appendChild($buttonRemove);

  $buttonIncrease.addEventListener('click', (event) => {
    addItemToCartHandler(product);
    $spanQuantity.innerHTML = ++product.quantity;
    if (product.discount) {
      $spanNewPrice.innerHTML =
        '$' +
        (
          product.price *
          (100 - product.discount) *
          0.01 *
          product.quantity
        ).toFixed(2);
      $spanOldPrice.innerHTML =
        '$' + (product.price * product.quantity).toFixed(2);
    } else {
      $spanPrice.innerHTML =
        '$' + (product.price * product.quantity).toFixed(2);
    }
    renderTotalCost();
    renderTotalQuantity();
  });

  $buttonDecrease.addEventListener('click', (event) => {
    removeItemToCartHandler(product);
    if (product.quantity === 1) return;
    $spanQuantity.innerHTML = --product.quantity;
    if (product.discount) {
      $spanNewPrice.innerHTML =
        '$' +
        (
          product.price *
          (100 - product.discount) *
          0.01 *
          product.quantity
        ).toFixed(2);
      $spanOldPrice.innerHTML =
        '$' + (product.price * product.quantity).toFixed(2);
    } else {
      $spanPrice.innerHTML =
        '$' + (product.price * product.quantity).toFixed(2);
    }
    renderTotalCost();
    renderTotalQuantity();
  });

  $buttonRemove.addEventListener('click', (event) => {
    removeItemToCartHandler(product, true);
    $container.removeChild($li);
    renderTotalCost();
    renderTotalQuantity();
  });
};

const renderProductsList = () => {
  const $container = document.querySelector('.cart-products');
  $container.innerHTML = '';
  const rawProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const productsList = rawProducts ? JSON.parse(rawProducts) : [];
  productsList.forEach((product) => {
    renderProductItem(product);
  });
};

// Render
renderListProductsInToday();
renderCartPage();
renderTotalQuantity();
