import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { getDataAsync } from "./../redux/dataSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("all");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log(input, value);
      dispatch(getDataAsync(input, value));
      setInput("");
    }
  };
  return (
    <div className="md:w-3/5 w-5/6 p-5 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-between relative -top-8  ">
      <HiSearch size={30} style={{ fill: "#aaa" }} />
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={handleSearch}
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
