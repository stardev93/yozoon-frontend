import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our owne custom Provider
  // we will store data (state) and functionality (updaters) in here
  // so every one can access it via the consumer

  const [cartOpen, setCartOpen] = useState(false);
  function openCart() {
    setCartOpen(true);
  }
  function closeCart() {
    setCartOpen(false);
  }
  return (
    <LocalStateProvider value={{ cartOpen, openCart, closeCart }}>
      {children}
    </LocalStateProvider>
  );
}

//  a custom hook to access cart local state
function useCart() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };
