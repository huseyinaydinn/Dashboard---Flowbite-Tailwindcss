import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const data = {
    sideMenuOpen,
    setSideMenuOpen,
    menuOpen,
    setMenuOpen,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
