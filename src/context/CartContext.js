import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const obtenerLS = () => {
      const productosLS = JSON.parse(localStorage.getItem("productos")) ?? [];
      setItems(productosLS);
    };

    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(items));
  }, [items]);

  const añadirAlCarrito = (item) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, cantidad: count + cartItem.cantidad };
          } else {
            return cartItem;
          }
        })
      );
    } else {
      setItems([...items, { cantidad: count, ...item }]);
    }
  };

  const isInCart = (itemId) => {
    return !!items.find((item) => item.id === itemId);
  };

  function cartLenght() {
    let quantity = 0;
    items.forEach((i) => {
      quantity = quantity + i.cantidad;
    });
    return quantity;
  }

  const contador = (counter) => {
    setCount(counter);
  };

  function getTotal() {
    let total = 0;
    items.forEach((i) => {
      total = total + i.cantidad * i.precio;
    });
    return Number(total);
  }

  const removeItem = (id) => {
    const remove = items.filter((item) => item.id !== id);
    setItems(remove);
    setCount(count);
  };
  const emptyItems = () => {
    setItems([]);
    setCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        items,

        removeItem,
        emptyItems,
        contador,
        count,
        añadirAlCarrito,
        cartLenght,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
