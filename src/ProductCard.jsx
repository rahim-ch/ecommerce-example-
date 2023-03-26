import React, { useContext, useState, useEffect } from "react";
import FavoriteContext from "./FavoriteContext";
import CartContext from "./CartContext";




const ProductCard = ({ product, isProductPage }) => {
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const { carts, setCarts } = useContext(CartContext);
  useEffect(() => {
    const API_KEY = "pgWTcwYLZeNj9gdXOVbSssOWF6elH1FFEKZBKCBTQBJCvlY7TgHygnvp";
    const URL = `https://api.pexels.com/v1/search?query=${product.name}&per_page=1`;
  
    fetch(URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.photos && data.photos.length > 0) {
          setImage(data.photos[0].src.medium);
        }
      })
      .catch((error) => console.log(error));
  }, [product.name]);

  const handleAddToCart = () => {
    if (carts.includes(product.id)) {
      setCarts(carts.filter((id) => id !== product.id));
    } else {
      setCarts([...carts, product.id]);
    }
  };

  const handleAddToFavorites = () => {
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);
    }
  };

  const cartButtonText = isProductPage ? "Add to Cart" : "Remove from Cart";
  const favoriteButtonText = isProductPage ? "Add to Favorites" : "Remove from Favorites";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div className="min-w-[340px] flex flex-col group">
          <div
            className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative"
          >
           <img
  src={image}
  className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
  alt={product.name}
/>

            <div
              className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"
            ></div>
          </div>
          <a
            href={`./single_post.html?id=${product.id}`}
            className="block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
          >
            {product.name}
          </a>

          <p className="mb-4 font-light text-sm md:text-sm text-center text-gray-400">
            {product.description}
          </p>

          <div className="flex justify-center gap-x-3">
            <button
              className="px-5 py-2 border border-primary text-primary hover:bg-primary transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold"
              onClick={handleAddToCart}
            >
              {cartButtonText}
            </button>
            <button
              className="px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold"
              onClick={handleAddToFavorites}
            >
              {favoriteButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
