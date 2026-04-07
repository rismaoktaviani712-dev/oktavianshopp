const products = [
  { id: 1, name: "E-book Belajar HTML", price: 50000 },
  { id: 2, name: "Template Website", price: 75000 },
  { id: 3, name: "Preset Lightroom", price: 30000 }
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rp ${product.price}</p>
      <button onclick="addToCart(${product.id})">Beli</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>Rp ${item.price}</span>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalEl.textContent = total;
}

renderProducts();
