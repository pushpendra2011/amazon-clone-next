import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
function Product({ id, title, price, description, category, image }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex justify-between items-center">
        <div className="flex">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-4 text-yellow-500" />
            ))}
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img src="https://links.papareact.com/fdw" className="w-12"></img>
            <p className="text-xs text-gray-500">Free next day delivery</p>
          </div>
        )}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
