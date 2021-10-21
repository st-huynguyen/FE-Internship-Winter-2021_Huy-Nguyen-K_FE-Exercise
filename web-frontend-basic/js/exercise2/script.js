const data = [
  {
    name: "Basic",
    price: "$10 / month",
    des: [
      "10 users included",
      "2GB of storage",
      "Email support",
      "Help center access",
    ],
    button: "Get Started",
  },
  {
    name: "Pro",
    price: "$30 / month",
    des: [
      "100 users included",
      "20GB of storage",
      "Priority email support",
      "Help center access",
    ],
    button: "Buy Now",
  },
];

const containerE = document.createElement("div");
document.body.appendChild(containerE);

const planListE = document.createElement("ul");
containerE.appendChild(planListE);

data.forEach(function (item, index) {
  const planItemE = document.createElement("li");
  planListE.appendChild(planItemE);
  const planDivE = document.createElement("div");
  planItemE.appendChild(planDivE);

  const planNameE = document.createElement("p");
  planNameE.innerHTML = item.name;
  planDivE.appendChild(planNameE);

  const planPriceE = document.createElement("p");
  planPriceE.innerHTML = item.price;
  planDivE.appendChild(planPriceE);

  const desListE = document.createElement("ul");
  planDivE.appendChild(desListE);
  item.des.forEach(function (item) {
    const desItemE = document.createElement("li");
    desItemE.innerHTML = item;
    desListE.appendChild(desItemE);
  });

  const planButtonE = document.createElement("button");
  planButtonE.innerHTML = item.button;
  planDivE.appendChild(planButtonE);
});
