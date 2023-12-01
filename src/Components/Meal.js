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
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
        {mealData.map(item)}
      </div>
    </div>
  );
};
export default Meal;
