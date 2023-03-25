import React, { useState } from 'react';
import FavoriteContext from './FavoriteContext';

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const contextValue = {
    favorites,
    setFavorites,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;