import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);

  const addToCart = (item) => {
    if (!items.includes(item)) {
      return setItems([...items, item]);
    } else {
      return false;
    }
  };

  const contador = (count) => {
    setCount(count)
  }
  console.log(count)

  const removeItem = (id) => {
    const remove = items.filter((item) => item.id !== id);
    setItems(remove);
  };
  const emptyItems = () => {
    setItems([]);
  };
  console.log(items);
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeItem,
        emptyItems,
        contador
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
