let catalog = [
  {
    title: "Oranges",
    category: "fruit",
    price: 15.99,
    image: "oranges.jpg",
    _id: "1",
  },
  {
    title: "Fruit Mix",
    category: "fruit",
    price: 25.99,
    image: "fruit.jpg",
    _id: "2",
  },
  {
    title: "Mac-N-Cheese",
    category: "dairy",
    price: 12.99,
    image: "mac.jpg",
    _id: "3",
  },
  {
    title: "Milk-N-Oats",
    category: "dairy",
    price: 15.99,
    image: "milk.jpg",
    _id: "4",
  },
  {
    title: "Pancakes",
    category: "dairy",
    price: 12.99,
    image: "pancake.jpg",
    _id: "5",
  },
  {
    title: "Vegi-Mix",
    category: "vegetable",
    price: 19.99,
    image: "vegi.jpg",
    _id: "6",
  },
];

const CART_KEY = "cart";

class DataService {
  getProducts() {
    return catalog;
  }

  addToCart(prod) {
    let cart = this.readCart();
    cart.push(prod);

    const jsonCart = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, jsonCart);
  }

  readCart() {
    const jsonCart = localStorage.getItem(CART_KEY);
    if (jsonCart) {
      return JSON.parse(jsonCart);
    } else {
      return []; // empty cart
    }
  }

  removeItem(prodId) {
    let cart = this.readCart();
    const updatedCart = cart.filter((item) => item._id !== prodId);

    const jsonCart = JSON.stringify(updatedCart);
    localStorage.setItem(CART_KEY, jsonCart);
  }
}

export default DataService;
