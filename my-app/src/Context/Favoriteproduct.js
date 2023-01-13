import { createContext, useState } from "react";

export const Context = createContext();

const Favoriteproduct = ({ children }) => {
  const [datas, setdatas] = useState([]);
  const [fav, setfav] = useState([]);
  const data = {
    datas,
    setdatas,
    fav,
    setfav,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Favoriteproduct;
