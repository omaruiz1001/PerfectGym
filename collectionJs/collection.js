import keys from "../assets/keys.js";

const products = document.getElementById("productos");
const options = { headers: { Authorization: `Bearer ${keys.secret}` } };

const formatMoneda = num => `$${num.slice(0, -2)}.${num.slice(-2)}`;

let categories, prices;

Promise.all([
  fetch("https://api.stripe.com/v1/products", options),
  fetch("https://api.stripe.com/v1/prices", options)
])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(json => {
    categories = json[0].data;
    prices = json[1].data;

    prices.forEach(e => {
      let categoriesData = categories.find(category => category.id === e.product);

      if (categoriesData) {
        const productElement = document.createElement("figure");
        productElement.classList.add("product");
        productElement.setAttribute("data-price", e.id);

        const imgElement = document.createElement("img");
        imgElement.src = categoriesData.images[0] || "";
        imgElement.alt = categoriesData.name;

        const iconsElement = document.createElement("div");
        iconsElement.classList.add("grid__icons");

        const icon1 = document.createElement("i");
        icon1.classList.add("fa-solid", "fa-eye", "icon1");

        const icon2 = document.createElement("i");
        icon2.classList.add("fa-regular", "fa-heart", "icon2");

        iconsElement.appendChild(icon1);
        iconsElement.appendChild(icon2);

        const figcaptionElement = document.createElement("figcaption");
        figcaptionElement.innerHTML = `${categoriesData.name} ${formatMoneda(e.unit_amount_decimal)} ${(e.currency).toUpperCase()}`;

        productElement.appendChild(imgElement);
        productElement.appendChild(iconsElement);
        productElement.appendChild(figcaptionElement);

        products.appendChild(productElement);

        // Agregar eventos a los productos creados
        productElement.addEventListener("mouseover", () => {
          console.log("Mouse over:", categoriesData.name);
          iconsElement.classList.add("active");
        });

        productElement.addEventListener("mouseout", () => {
          iconsElement.classList.remove("active");
        });
      }
    });
  })
  .catch(error => {
    let message = error.statusText || "Ocurrió un error en la petición";
    products.innerHTML = `Error: ${error.status} - ${message}`;
  });

document.addEventListener("click", e => {
  if (e.target.matches(".product *")) {
    let priceId = e.target.parentElement.getAttribute("data-price");
    if (typeof Stripe !== 'undefined') {
      Stripe(keys.public).redirectToCheckout({
        lineItems: [{
          price: priceId,
          quantity: 1
        }],
        mode: "subscription",
        successUrl: "http://127.0.0.1:5501/success.html",
        cancelUrl: "http://127.0.0.1:5501/cancel.html"
      })
        .then(res => {
          if (res.error) {
            products.insertAdjacentElement("afterend", res.error.message);
          }
        });
    } else {
      console.error('La variable Stripe no está definida. Asegúrate de incluir la biblioteca de Stripe en tu proyecto.');
    }
  }
});

