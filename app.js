const products = [
  {
    id: 1,
    title: "Eco-friendly Wooden Chair",
    price: "₹1200",
    image: "https://via.placeholder.com/320x180?text=Wooden+Chair"
  },
  {
    id: 2,
    title: "Reusable Water Bottle",
    price: "₹250",
    image: "https://via.placeholder.com/320x180?text=Water+Bottle"
  },
  {
    id: 3,
    title: "Pre-loved Backpack",
    price: "₹800",
    image: "https://via.placeholder.com/320x180?text=Backpack"
  }
];

// Select product feed container
const productFeed = document.getElementById("productFeed");

// Function to render products
function renderProducts() {
  productFeed.innerHTML = ""; // Clear previous items
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image" style="background-image:url('${product.image}')"></div>
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">${product.price}</p>
    `;
    productFeed.appendChild(card);
  });
}

// Initial render
renderProducts();

// Handle add product button
document.getElementById("addProductBtn").addEventListener("click", () => {
  const newProduct = {
    id: products.length + 1,
    title: "New Sustainable Item",
    price: "₹500",
    image: "https://via.placeholder.com/320x180?text=New+Item"
  };
  products.push(newProduct);
  renderProducts();
});
