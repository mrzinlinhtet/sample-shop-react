import { useEffect, useState } from "react";
import MealCart from "./MealCart";

const Meal = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeal();
  }, []);
  const getMeal = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setMeals(meals);
    console.log(meals);
  };

  return (
    <div className="flex flex-wrap gap-10 my-10 justify-center">
      {meals.map(meal => {
        return (
          <MealCart key={meal.idMeal} id={meal.idMeal} name={meal.setMeals} image={meal.strMealThumb} />
        );
      
      })}
    </div>
  );
};

export default Meal;
