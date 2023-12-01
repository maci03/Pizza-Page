import React from "react";
import { mealData } from "../data/data";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const fillterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:float-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button></button>
        </div>
      </div>
    </div>
  );
};
export default Meal;
