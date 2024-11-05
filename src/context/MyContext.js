import { createContext } from 'react';
import { useState } from 'react';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isShow, setShow] = useState(true);

  return (
    <MyContext.Provider value={{ isShow, setShow}}>
      {children}
    </MyContext.Provider>
  );
};

