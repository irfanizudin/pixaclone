import React from "react";
import { HiHeart, HiEye } from "react-icons/hi";

const Card = ({ imgUrl }) => {
    return (
        <div className="shadow-lg">
            <div>
                <img src={imgUrl} alt="img name" className="object-cover" />
            </div>
            <div className="flex items-center justify-between py-2 px-4">
                <div className="flex items-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg"
                        alt="avatar"
                        className="w-12 h-12 object-cover mr-2 rounded-full"
                    />
                    <h4 className="username text-gray-700 font-semibold">Carlos</h4>
                </div>
                <div className="detail flex items-center text-gray-500">
                    <div className="like flex items-center mr-3">
                        <HiHeart />
                        <span className="ml-1">192</span>
                    </div>
                    <div className="views flex items-center">
                        <HiEye />
                        <span className="ml-1">43k</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
