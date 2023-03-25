import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import FavoriteContext from "./FavoriteContext";
import products from "./assets/data.json";
const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const filteredProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className="flex flex-wrap justify-center">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} isProductPage={false}/>
      ))}
    </div>
  );
};

export default Favorites;
