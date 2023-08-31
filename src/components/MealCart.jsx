import React from "react";
import { BiSearch } from "react-icons/bi";
import "./MealCart.css";
import {Link} from  "react-router-dom"


const MealCart = ( {id, name, image} ) => {
  return (
    <div className="relative parent">
      <img
        src={image}
        className="image h-[300px] object-cover rounded-lg"
        alt=""
      />
      <Link to={`/detail/${id}`}>
        <p className="icon absolute top-[45%] left-[45%] bg-orange-500 rounded-[100%] border h-12 w-12 flex justify-center items-center">
          <BiSearch className="text-3xl text-white" />
        </p>
      </Link>
    </div>
  );
};

export default MealCart;
