import React from "react";
import Card from "./Card";

const Content = () => {
    return (
        <div className="container mx-auto pb-6">
            <select
                name="type"
                className="focus:outline-none cursor-pointer rounded border-2 border-gray-300 px-3 py-1 mx-auto block"
            >
                <option selected value="popular">
                    Popular
                </option>
                <option value="latest">Latest</option>
            </select>
            <div className="grid grid-cols-4 gap-4 mt-6">
                <Card imgUrl="https://cdn.pixabay.com/photo/2020/01/28/14/26/street-4799914__340.jpg" />
                <Card imgUrl="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <Card imgUrl="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    );
};

export default Content;
