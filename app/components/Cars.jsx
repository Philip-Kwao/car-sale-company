import React from "react";
import ImageCard from "./ImageCard";
import { cars } from "@/_data/db";
const Cars = async () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-around">
        {cars.map((car, id) => (
          <ImageCard
            id={id}
            img={car.image_link}
            title_1={car.make}
            title_2={car.model}
            year={car.year}
            price={car.price}
            engine={car.engine}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
