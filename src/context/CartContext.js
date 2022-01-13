import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  
  const añadirAlCarrito = (item) => {
    if(!isInCart(item.id)){

      setItems([...items, { cantidad: count, ...item}]);
    }
  };
  

  const contador = (counter) => {
    setCount(counter += count)
  }
 


  const removeItem = (id) => {
    const remove = items.filter((item) => item.id !== id);
    setItems(remove);
    setCount(count)
  };
  const emptyItems = () => {
    setItems([]);
    setCount(0);
  };

  const isInCart = (itemId) => {
    return !!items.find(item => item.id === itemId);
}
 
  return (
    <CartContext.Provider
      value={{
        items,
        
        removeItem,
        emptyItems,
        contador,
        count,
        añadirAlCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
