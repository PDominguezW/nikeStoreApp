import React, { useState } from "react";

function formatPrice(price) {
  // This function receives a number, like 20000000, and returns a string, like $20.000.000
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);
}

const PopularProductCard = (offer) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageError = (e) => {
    // Set e.target.src to assets/images/defaultShoe.png
    e.target.src = "src/assets/images/defaultShoe.png";
  };

  return (
    <a
      href={offer.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative block"
    >
      <div className="flex flex-col w-full border border-gray-300 rounded-lg relative p-1">
        <img
          src={offer.imageUrl}
          alt={offer.name}
          onError={handleImageError} // Handle image loading errors
          className="w-full rounded-lg opacity-80"
        />
        {isHovered ? (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-red-500 bg-opacity-75 p-3 m-1 rounded-lg">
            <p className="text-2xl leading-normal font-semibold font-palanquin text-center">
              {offer.name}
            </p>
            <br />
            <p className="font-semibold font-montserrat text-xl leading-normal">
              Descuento de {formatPrice(offer.priceDiscount)}
            </p>
            <br />
            <p className="font-semibold font-montserrat text-2xl leading-normal">
              Antes: {offer.prices[0]}
            </p>
            <p className="font-semibold font-montserrat text-2xl leading-normal">
              Ahora: {offer.prices[1]}
            </p>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col justify-start items-center text-black bg-opacity-75 mt-5 m-5">
            <h3 className="text-2xl leading-normal font-semibold font-palanquin text-center">
              {offer.name}
            </h3>
            <h4 className="font-semibold font-montserrat text-xl leading-normal">
              {offer.offerPorcentage} %
            </h4>
          </div>
        )}
      </div>
    </a>
  );
};

export default PopularProductCard;
