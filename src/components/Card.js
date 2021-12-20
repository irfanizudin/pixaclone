import React from "react";
import { HiHeart, HiEye } from "react-icons/hi";

const Card = ({ data }) => {
  const { webformatURL, user, userImageURL, likes, views } = data;

  const separate = (value) => {
    if (value >= 1000) return Math.round(value / 1000) + "k";
    else return value;
  };
  return (
    <div className="shadow-lg">
      <div>
        <img src={webformatURL} alt={user} className="object-cover" />
      </div>
      <div className="flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <img src={userImageURL} alt={user} className="w-12 h-12 object-cover mr-2 rounded-full" />
          <h4 className="username text-gray-700 font-semibold">{user}</h4>
        </div>
        <div className="detail flex items-center text-gray-500">
          <div className="like flex items-center mr-3">
            <HiHeart />
            <span className="ml-1">{separate(likes)}</span>
          </div>
          <div className="views flex items-center">
            <HiEye />
            <span className="ml-1">{separate(views)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
