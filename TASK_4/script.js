const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Graphic T-Shirt",
    category: "clothing",
    price: 299,
    rating: 4.0,
    image: "2.png"
  },
  {
    name: "Wireless Headphones",
    category: "electronics",
    price: 999,
    rating: 4.6,
    image: "1.png"
  },
  {
    name: "Winter Jacket",
    category: "clothing",
    price: 899,
    rating: 4.2,
    image: "4.png"
  },
  {
    name: "Analog Watch",
    category: "electronics",
    price: 149,
    rating: 3.9,
    image: "5.png"
  },
  {
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 649,
    rating: 4.4,
    image: "6.png"
  },
  
  {
  name: "Hoodie",
  category: "clothing",
  price: 399,
  rating: 4.1,
  image: "7.png"
},

  {
    name: "Fitness Tracker",
    category: "electronics",
    price: 849,
    rating: 4.7,
    image: "8.png"
  },
  {
    name: "Leather Boots",
    category: "clothing",
    price: 1299,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Gaming Laptop",
    category: "electronics",
    price: 200000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Summer Dress",
    category: "clothing",
    price: 799,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Smart Home Speaker",
    category: "electronics",
    price: 299,
    rating: 4.2,
    image: "9.png"
  }
];

let filteredProducts = [...products];

function renderProducts(productArray) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  productArray.forEach(p => {
    container.innerHTML += `
      <div class="product-card" data-category="${p.category}" data-price="${p.price}" data-rating="${p.rating}">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:160px; object-fit:cover; border-radius:10px;" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>Rating: ${p.rating}⭐</p>
      </div>
    `;
  });
}

function filterProducts() {
  const category = document.getElementById("category").value;
  filteredProducts = category === "all" ? [...products] : products.filter(p => p.category === category);
  sortProducts(); // After filtering, apply sort
}

function sortProducts() {
  const sortType = document.getElementById("sort").value;
  if (sortType === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  renderProducts(filteredProducts);
}

window.onload = () => {
  renderProducts(products);
};
