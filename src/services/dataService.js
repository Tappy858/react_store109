let catalog = [
  {
    title: "Orange",
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
    title: "Pancake",
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

class DataService {
  getProducts() {
    return catalog;
    }
}

export default DataService;
