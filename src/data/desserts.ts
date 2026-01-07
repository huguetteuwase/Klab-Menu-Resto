import { Dessert, DessertCategory } from "../types/index.js";

export const desserts: Dessert[] = [
  {
    id: "waffle",
    name: "Waffle with Berries",
    category: DessertCategory.Waffle,
    price: 6.50,
    image: {
      desktop: "assets/images/image-waffle-desktop.jpg",
      mobile: "assets/images/image-waffle-mobile.jpg",
      tablet: "assets/images/image-waffle-tablet.jpg",
      thumbnail: "assets/images/image-waffle-thumbnail.jpg"
    },
    description: "Crispy Belgian waffle with fresh berries",
    inStock: true
  },
  {
    id: "creme-brulee",
    name: "Vanilla Bean Crème Brûlée",
    category: DessertCategory.CremeBrulee,
    price: 7.00,
    image: {
      desktop: "assets/images/image-creme-brulee-desktop.jpg",
      mobile: "assets/images/image-creme-brulee-mobile.jpg",
      tablet: "assets/images/image-creme-brulee-tablet.jpg",
      thumbnail: "assets/images/image-creme-brulee-thumbnail.jpg"
    },
    description: "Creamy custard with caramelized sugar top",
    inStock: true
  },
  {
    id: "macaron",
    name: "Macaron Mix of Five",
    category: DessertCategory.Macaron,
    price: 8.00,
    image: {
      desktop: "assets/images/image-macaron-desktop.jpg",
      mobile: "assets/images/image-macaron-mobile.jpg",
      tablet: "assets/images/image-macaron-tablet.jpg",
      thumbnail: "assets/images/image-macaron-thumbnail.jpg"
    },
    description: "Delicate French macarons with ganache filling",
    inStock: true
  },
  {
    id: "tiramisu",
    name: "Classic Tiramisu",
    category: DessertCategory.Tiramisu,
    price: 5.50,
    image: {
      desktop: "assets/images/image-tiramisu-desktop.jpg",
      mobile: "assets/images/image-tiramisu-mobile.jpg",
      tablet: "assets/images/image-tiramisu-tablet.jpg",
      thumbnail: "assets/images/image-tiramisu-thumbnail.jpg"
    },
    description: "Classic Italian dessert with coffee and mascarpone",
    inStock: true
  },
  {
    id: "baklava",
    name: "Pistachio Baklava",
    category: DessertCategory.Baklava,
    price: 4.00,
    image: {
      desktop: "assets/images/image-baklava-desktop.jpg",
      mobile: "assets/images/image-baklava-mobile.jpg",
      tablet: "assets/images/image-baklava-tablet.jpg",
      thumbnail: "assets/images/image-baklava-thumbnail.jpg"
    },
    description: "Layered pastry with honey and pistachios",
    inStock: true
  },
  {
    id: "meringue",
    name: "Lemon Meringue Pie",
    category: DessertCategory.Pie,
    price: 5.00,
    image: {
      desktop: "assets/images/image-meringue-desktop.jpg",
      mobile: "assets/images/image-meringue-mobile.jpg",
      tablet: "assets/images/image-meringue-tablet.jpg",
      thumbnail: "assets/images/image-meringue-thumbnail.jpg"
    },
    description: "Tangy lemon curd with fluffy meringue",
    inStock: true
  },
  {
    id: "cake",
    name: "Red Velvet Cake",
    category: DessertCategory.Cake,
    price: 4.50,
    image: {
      desktop: "assets/images/image-cake-desktop.jpg",
      mobile: "assets/images/image-cake-mobile.jpg",
      tablet: "assets/images/image-cake-tablet.jpg",
      thumbnail: "assets/images/image-cake-thumbnail.jpg"
    },
    description: "Classic red velvet with cream cheese frosting",
    inStock: true
  },
  {
    id: "brownie",
    name: "Salted Caramel Brownie",
    category: DessertCategory.Brownie,
    price: 5.50,
    image: {
      desktop: "assets/images/image-brownie-desktop.jpg",
      mobile: "assets/images/image-brownie-mobile.jpg",
      tablet: "assets/images/image-brownie-tablet.jpg",
      thumbnail: "assets/images/image-brownie-thumbnail.jpg"
    },
    description: "Rich chocolate brownie with salted caramel",
    inStock: true
  },
  {
    id: "panna-cotta",
    name: "Vanilla Panna Cotta",
    category: DessertCategory.PannaCotta,
    price: 6.50,
    image: {
      desktop: "assets/images/image-panna-cotta-desktop.jpg",
      mobile: "assets/images/image-panna-cotta-mobile.jpg",
      tablet: "assets/images/image-panna-cotta-tablet.jpg",
      thumbnail: "assets/images/image-panna-cotta-thumbnail.jpg"
    },
    description: "Italian cream dessert with berry sauce",
    inStock: true
  }
];

