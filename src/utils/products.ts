import { Dessert, DessertCategory } from "../types/index.js";
import { products } from "../data/products.js";

/**
 * Product utility functions for managing product listings
 */

/**
 * Search products by name
 */
export function searchProducts(query: string): Dessert[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Sort products by price (ascending)
 */
export function sortProductsByPriceAsc(productsList: Dessert[]): Dessert[] {
  return [...productsList].sort((a, b) => a.price - b.price);
}

/**
 * Sort products by price (descending)
 */
export function sortProductsByPriceDesc(productsList: Dessert[]): Dessert[] {
  return [...productsList].sort((a, b) => b.price - a.price);
}

/**
 * Sort products by name (alphabetical)
 */
export function sortProductsByName(productsList: Dessert[]): Dessert[] {
  return [...productsList].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Filter products by price range
 */
export function filterProductsByPriceRange(
  productsList: Dessert[],
  minPrice: number,
  maxPrice: number
): Dessert[] {
  return productsList.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
}

/**
 * Get products grouped by category
 */
export function getProductsGroupedByCategory(): Record<string, Dessert[]> {
  const grouped: Record<string, Dessert[]> = {};
  products.forEach((product) => {
    const category = product.category;
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(product);
  });
  return grouped;
}

/**
 * Get unique categories from products
 */
export function getUniqueCategories(): DessertCategory[] {
  const categories = new Set<DessertCategory>();
  products.forEach((product) => {
    categories.add(product.category);
  });
  return Array.from(categories);
}

/**
 * Calculate average product price
 */
export function getAveragePrice(): number {
  if (products.length === 0) return 0;
  const total = products.reduce((sum, product) => sum + product.price, 0);
  return total / products.length;
}

/**
 * Get cheapest product
 */
export function getCheapestProduct(): Dessert | undefined {
  if (products.length === 0) return undefined;
  return products.reduce((cheapest, product) =>
    product.price < cheapest.price ? product : cheapest
  );
}

/**
 * Get most expensive product
 */
export function getMostExpensiveProduct(): Dessert | undefined {
  if (products.length === 0) return undefined;
  return products.reduce((expensive, product) =>
    product.price > expensive.price ? product : expensive
  );
}



