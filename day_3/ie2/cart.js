// cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return { success: false, message: 'Product not found' };

  if (!checkStock(productId, quantity)) {
    return { success: false, message: 'Insufficient stock' };
  }

  const existingItem = cartItems.find(item => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }

  return { success: true, message: `${product.name} added to cart` };
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.product.id !== productId);
  return { success: true, message: 'Item removed from cart' };
}

export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(i => i.product.id === productId);
  if (!item) return { success: false, message: 'Item not found in cart' };

  if (!checkStock(productId, newQuantity)) {
    return { success: false, message: 'Insufficient stock' };
  }

  item.quantity = newQuantity;
  return { success: true, message: 'Quantity updated' };
}

export function getCartItems() {
  return cartItems;
}

export function getCartTotal() {
  return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function clearCart() {
  cartItems = [];
  return { success: true, message: 'Cart cleared' };
}