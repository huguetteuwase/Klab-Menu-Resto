// Dessert Category Enum
export enum DessertCategory {
  Waffle = "Waffle",
  CremeBrulee = "Creme Brulee",
  Macaron = "Macaron",
  Tiramisu = "Tiramisu",
  Baklava = "Baklava",
  Pie = "Pie",
  Cake = "Cake",
  Brownie = "Brownie",
  PannaCotta = "Panna Cotta"
}

// Type Aliases
export type OrderStatus = "pending" | "confirmed" | "cancelled";
export type Currency = "USD" | "EUR" | "GBP";
export type DessertId = string;

// Dessert Interface
export interface Dessert {
  id: DessertId;
  name: string;
  category: DessertCategory;
  price: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
    thumbnail: string;
  };
  description: string;
  inStock: boolean;
}

// Cart Item Interface
export interface CartItem {
  dessert: Dessert;
  quantity: number;
  addedAt: Date;
}



