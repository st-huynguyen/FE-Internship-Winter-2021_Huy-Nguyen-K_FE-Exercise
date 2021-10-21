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

// Add font
const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
);
document.head.appendChild(link);

// Body styles
document.body.style.fontFamily = "'Roboto', sans-serif";
document.body.style.fontSize = "16px";

// Create and style elements
const containerE = document.createElement("div");
document.body.appendChild(containerE);
containerE.style.textAlign = "center";
containerE.style.maxWidth = "640px";

const planListE = document.createElement("ul");
containerE.appendChild(planListE);
planListE.style.display = "flex";
planListE.style.gap = "20px";
planListE.style.listStyle = "none";
planListE.style.width = "100%";
planListE.style.padding = 0;

data.forEach(function (item, index) {
  const planItemE = document.createElement("li");
  planListE.appendChild(planItemE);
  planItemE.style.border = "1px solid #ddd";
  planItemE.style.borderRadius = "3px";
  planItemE.style.width = "50%";
  planItemE.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.08)";

  const planDivE = document.createElement("div");
  planItemE.appendChild(planDivE);

  const planNameE = document.createElement("p");
  planNameE.innerHTML = item.name;
  planDivE.appendChild(planNameE);
  planNameE.style.display = "block";
  planNameE.style.borderBottom = "1px solid #ddd";
  planNameE.style.padding = "10px";
  planNameE.style.margin = "0px";
  planNameE.style.backgroundColor = "#f4f4f4";
  planNameE.style.fontSize = "18px";

  const planContent = document.createElement("div");
  planDivE.appendChild(planContent);
  planContent.style.display = "flex";
  planContent.style.flexDirection = "column";
  planContent.style.padding = "12px";

  const planPriceE = document.createElement("p");
  planPriceE.innerHTML = item.price;
  planContent.appendChild(planPriceE);
  planPriceE.style.marginTop = "10px";
  planPriceE.style.fontWeight = 500;

  const desListE = document.createElement("ul");
  planContent.appendChild(desListE);
  desListE.style.listStyle = "none";
  desListE.style.padding = 0;

  item.des.forEach(function (item) {
    const desItemE = document.createElement("li");
    desItemE.innerHTML = item;
    desListE.appendChild(desItemE);
    desItemE.style.fontSize = "13px";
  });

  const planButtonE = document.createElement("button");
  planButtonE.innerHTML = item.button;
  planContent.appendChild(planButtonE);
  planButtonE.style.marginTop = "15px";
  planButtonE.style.padding = "8px";
  planButtonE.style.fontFamily = "'Roboto', sans-serif";
  planButtonE.style.borderRadius = "3px";
  planButtonE.style.color = "#fff";
  planButtonE.style.border = "1px solid #0275d8";
  planButtonE.style.backgroundColor = "#0275d8";
});

// Style for "Get started" button
const outlineButton = document.querySelector("button");
outlineButton.style.color = "#0275d8";
outlineButton.style.backgroundColor = "transparent";
