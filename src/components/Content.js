import React, { useEffect } from "react";
import Card from "./Card";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync } from "../redux/dataSlice";

const Content = () => {
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
  const loading = useSelector((state) => state.data.loading);

  return (
    <div className="md:container md:mx-auto pb-6">
      {loading ? (
        <div className="h-screen">
          <h1 className="text-3xl text-center">Loading....</h1>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Content;
