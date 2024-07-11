"use client";
import { createContext, useContext, useState } from "react";

const CartPageContext = createContext();

export const useCart = () => useContext(CartPageContext);

export const CartPageProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingBooks = prevCart.find((item) => item.id === book.id);
      if (existingBooks) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== bookId)
    );
  };
  const incrementQuantity = (bookId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (bookId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === bookId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartPageContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartPageContext.Provider>
  );
};