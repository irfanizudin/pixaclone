import React from "react";
import Card from "./Card";
import Masonry from "react-masonry-css";

const Content = () => {
    const breakpoints = {
        default: 4,
        1024: 3,
        768: 2,
        640: 1,
    };

    return (
        <div className="md:container md:mx-auto pb-6">
            <select
                name="type"
                className="focus:outline-none cursor-pointer rounded border-2 border-gray-300 px-3 py-1 mx-auto block mb-8"
            >
                <option selected value="popular">
                    Popular
                </option>
                <option value="latest">Latest</option>
            </select>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <div>
                    <Card imgUrl="https://cdn.pixabay.com/photo/2020/01/28/14/26/street-4799914__340.jpg" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://cdn.pixabay.com/photo/2020/01/28/14/26/street-4799914__340.jpg" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <Card imgUrl="https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
            </Masonry>
        </div>
    );
};

export default Content;
