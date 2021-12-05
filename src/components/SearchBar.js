import React from "react";
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
    return (
        <div className="w-1/2 p-5 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-between relative -top-8  ">
            <HiSearch size={30} style={{ fill: "#aaa" }} />
            <input type="text" placeholder="Search..." className="w-full focus:outline-none ml-3" />
            <select name="type" className="focus:outline-none cursor-pointer border-l-2 px-2">
                <option selected value="all">
                    All
                </option>
                <option value="photo">Photo</option>
                <option value="illustration">Illustration</option>
                <option value="vector">Vector</option>
            </select>
        </div>
    );
};

export default SearchBar;
