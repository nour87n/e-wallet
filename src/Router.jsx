import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Login from "./authentication/Login";
import LoginConfirmation from "./authentication/LoginConfirmation";
import Register from "./authentication/Register.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="/confirm-login" element={<LoginConfirmation />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
