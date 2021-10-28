// Input element
const input = document.createElement('input');
input.placeholder = 'nhập năm sinh';
document.body.appendChild(input);

// Button element
const button = document.createElement('button');
button.innerHTML = 'Tính tuổi';
document.body.appendChild(button);

// Calculate the age from input
const eventHandler = function (event) {
  const x = 2021 - +input.value;
  const p = document.createElement('p');
  p.innerHTML = `Tuổi của bạn là: ${x}`;
  document.body.appendChild(p);
};
button.addEventListener('click', eventHandler);
