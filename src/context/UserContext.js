// src/context/UserContext.jsx
import { createContext, useState } from 'react';

export const UserContext = createContext();

const mockUser = {
  name: "K Monika",
  email: "raomonika343@gmail.com"
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);

  const updateUser = (updatedUser) => {
    setUser((prev) => ({ ...prev, ...updatedUser }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
