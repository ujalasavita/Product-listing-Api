// Fetch product data from the API
const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };
  
  // Fetch product categories from the API
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };
  // app.js
const renderProducts = (products) => {
  const appContainer = document.getElementById('app');

  const productItems = products.map(product => `
    <div class="product-item">
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    </div>
  `).join('');

  appContainer.innerHTML = productItems;
};

// Fetch and render products when the page loads
window.onload = async () => {
  const products = await fetchProducts();
  renderProducts(products);
};
// Filter products by category
const filterProductsByCategory = async (category) => {
  const products = await fetchProducts();
  return category === 'all' ? products : products.filter(product => product.category === category);
};

// Search products by title
const searchProducts = (query, products) => {
  return products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
};

// Sort products by price
const sortProductsByPrice = (products, order) => {
  return products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
};
