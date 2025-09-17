import React from "react";
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import ReceipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import ReactHookFormExamplePage from "./react-hook-form";

function CurstomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <ReceipeList />,
        },
        {
          path: "commnets-list",
          element: <CommentList />,
        },
        {
          path: "recipe-list/:id",
          element: <RecipeDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return element;
}

const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1>React routing, Custom hooks and more</h1>

      <div>
        <Link
          to={"/home/recipe-list"}
          className="m-4 text-blue-500 text-2xl font-medium"
        >
          Alternative way of navigating to recipe list page
        </Link>
      </div>

      <button
        onClick={() => navigate("/home/recipe-list")}
        className="border bg-black text-white px-2 py-1 rounded cursor-pointer"
      >
        Navigate to Recipe list page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        className="border bg-black text-white px-2 py-1 rounded cursor-pointer"
      >
        Navigate to Comments list page
      </button> */}
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<ReceipeList />} />
          <Route path="comments-list" element={<CommentList />} />
          {/* logic for dynamic path */}
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>
        {/* Logic for not found page */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/react-hook-form' element={<ReactHookFormExamplePage/>}/>
      </Routes>

      {/* Custom routes made by useRoutes */}
      {/* <CurstomRoutes /> */}
    </div>
  );
};

export default App;
