import React, { useContext } from "react";
import FavoriteContext from "./FavoriteContext";
import CartContext from "./CartContext";

const ProductCard = ({ product, isProductPage }) => {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const { carts, setCarts } = useContext(CartContext);

  const handleAddToCart = () => {
    if (carts.includes(product.id)) {
      setCarts(carts.filter((id) => id !== product.id));
    } else {
      setCarts([...carts, product.id]);
    }
  };
  const cartButtonText = isProductPage
  ? "Add to Carts"
  : "Remove from Carts";
  const handleAddToFavorites = () => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  const favoriteButtonText = isProductPage
    ? "Add to Favorites"
    : "Remove from Favorites";

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:grid grid- items-start mt-10 mb-4">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${product.image})` }}
        title={product.name}
      />
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {product.name}
          </div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <p className="text-gray-700 text-base mb-2">${product.price}</p>
        </div>
        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleAddToCart}
          >
           {cartButtonText}
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToFavorites}
          >
            {favoriteButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
