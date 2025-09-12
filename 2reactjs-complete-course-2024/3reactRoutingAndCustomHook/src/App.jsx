import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ReceipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>React routing, Custom hooks and more</h1>

      <div> 
        <Link
          to={"recipe-list"}
          className="m-4 text-blue-500 text-2xl font-medium"
        >
          Alternative way of navigating to recipe list page
        </Link>
      </div>

      <button
        onClick={() => navigate("/recipe-list")}
        className="border bg-black text-white px-2 py-1 rounded cursor-pointer"
      >
        Navigate to Recipe list page
      </button>
      <button
        onClick={() => navigate("/comments-list")}
        className="border bg-black text-white px-2 py-1 rounded cursor-pointer"
      >
        Navigate to Comments list page
      </button>
      <Routes>
        <Route path="/recipe-list" element={<ReceipeList />} />
        <Route path="/comments-list" element={<CommentList />} />
        {/* logic for dynamic path */}
        <Route path="/recipe-list/:id" element={<RecipeDetailsPage/>}/>
        {/* Logic for not found page */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
