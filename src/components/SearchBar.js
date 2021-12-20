import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("photo");

  return (
    <div className="md:w-3/5 w-5/6 p-5 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-between relative -top-8  ">
      <HiSearch size={30} style={{ fill: "#aaa" }} />
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
        className="w-full focus:outline-none ml-3"
      />
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="type"
        className="focus:outline-none cursor-pointer border-l-2 md:px-2 pl-2 bg-white"
      >
        <option value="all">All</option>
        <option value="photo">Photo</option>
        <option value="illustration">Illustration</option>
        <option value="vector">Vector</option>
      </select>
    </div>
  );
};

export default SearchBar;
