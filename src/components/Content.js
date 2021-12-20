import React, { useEffect, useState } from "react";
import Card from "./Card";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync } from "../redux/dataSlice";

const Content = () => {
  const [value, setValue] = useState("popular");

  const breakpoints = {
    default: 4,
    1278: 3,
    1023: 2,
    640: 1,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  const { hits } = useSelector((state) => state.data.datas);

  return (
    <div className="md:container md:mx-auto pb-6">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="type"
        className="focus:outline-none cursor-pointer rounded border-2 border-gray-300 px-3 py-1 mx-auto block mb-8 bg-white"
      >
        <option value="popular">Popular</option>
        <option value="latest">Latest</option>
      </select>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {hits &&
          hits.map((data, id) => (
            <div key={id}>
              <Card data={data} />
            </div>
          ))}
      </Masonry>
    </div>
  );
};

export default Content;
