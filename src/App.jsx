import { Routes, Route } from "react-router-dom";
import React from "react";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
