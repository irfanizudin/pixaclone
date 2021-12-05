import React from "react";
import { HiHeart, HiEye } from "react-icons/hi";

const Card = ({ imgUrl }) => {
    return (
        <div className="card shadow-lg">
            <div className="img-card">
                <img src={imgUrl} alt="img name" className="object-cover" />
            </div>
            <div className="info-card flex items-center justify-between py-2 px-4">
                <div className="avatar flex items-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2019/03/21/20/29/eyewear-4071870__340.jpg"
                        alt="avatar"
                        className="w-12 h-12 object-cover mr-2 rounded-full"
                    />
                    <h4 className="username">Carlos</h4>
                </div>
                <div className="detail flex items-center">
                    <div className="like flex items-center mr-2">
                        <HiHeart />
                        <span>192</span>
                    </div>
                    <div className="views flex items-center">
                        <HiEye />
                        <span>43k</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
