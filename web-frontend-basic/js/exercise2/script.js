const data = [
  {
    name: 'Basic',
    price: '$10 / month',
    des: [
      '10 users included',
      '2GB of storage',
      'Email support',
      'Help center access',
    ],
    button: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$30 / month',
    des: [
      '100 users included',
      '20GB of storage',
      'Priority email support',
      'Help center access',
    ],
    button: 'Buy Now',
  },
];

// Add font
const $link = document.createElement('link');
$link.setAttribute('rel', 'stylesheet');
$link.setAttribute('type', 'text/css');
$link.setAttribute(
  'href',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
);
document.head.appendChild($link);

// Create and add css class for elements
const $container = document.createElement('div');
$container.classList.add('container');
document.body.appendChild($container);

const $planList = document.createElement('ul');
$planList.classList.add('plan-list');
$container.appendChild($planList);

data.forEach(function (item) {
  const $planItem = document.createElement('li');
  $planItem.classList.add('plan-item');
  $planList.appendChild($planItem);

  const $planDiv = document.createElement('div');
  $planItem.appendChild($planDiv);

  const $planName = document.createElement('p');
  $planName.innerHTML = item.name;
  $planName.classList.add('plan-name');
  $planDiv.appendChild($planName);

  const $planContent = document.createElement('div');
  $planContent.classList.add('plan-content');
  $planDiv.appendChild($planContent);

  const $planPrice = document.createElement('p');
  $planPrice.innerHTML = item.price;
  $planPrice.classList.add('plan-price');
  $planContent.appendChild($planPrice);

  const $desList = document.createElement('ul');
  $desList.classList.add('des-list');
  $planContent.appendChild($desList);

  item.des.forEach(function (item) {
    const $desItem = document.createElement('li');
    $desItem.innerHTML = item;
    $desItem.classList.add('des-item');
    $desList.appendChild($desItem);
  });

  const $planButton = document.createElement('button');
  $planButton.innerHTML = item.button;
  $planButton.classList.add('button-plan');
  $planContent.appendChild($planButton);
});

// Add css style for "Get started" button
const $outlineButton = document.querySelector('button');
$outlineButton.classList.add('btn-outline');
