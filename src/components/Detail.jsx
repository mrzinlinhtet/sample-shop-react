import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";

const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});
  const [items,setItems] = useState([]);


  useEffect(() => {
    getMeal();
  }, []);

  useEffect(() => {
    // const newItem = [{meals.strIngredient1}]
    setItems();
  }, []);

  const getMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
    // console.log(meals[0]);
  };

  return (
    <div className="flex mx-auto w-[80%] gap-12 items-center h-full">
      <img
        src={meals.strMealThumb}
        className="h-[500px] rounded object-cover"
        alt=""
      />
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-500 tracking-wider mb-5">
          {meals.strMeal}
        </h2>
        <p className="text-lg font-bold text-gray-500 tracking-wider mb-5">
          {meals.strArea}
        </p>
        <p className="text-base font-bold text-gray-500 tracking-wider">
          {meals.strCategory}
        </p>
        <p className="text-gray-500 tracking-wide leading-7">
          {meals.strInstructions}
        </p>
        <a href={meals.strYoutube}>
          <IoLogoYoutube className="text-4xl mt-5 text-red-500 cursor-pointer" />
        </a>
        <p></p>
      </div>
    </div>
  );
};

export default Detail;
