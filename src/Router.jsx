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
import RegisterConfirmation from "./authentication/RegisterConfirmation.jsx";
import UserProfile from "./profile/UserProfile.jsx";
import MainProfile from "./profile/MainProfile.jsx";
import Cards from "./profile/Cards.jsx";
import Setting from "./profile/Setting.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="confirm-login" element={<LoginConfirmation />} />
      <Route path="register" element={<Register />} />
      <Route path="confirm-register" element={<RegisterConfirmation />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="main-profile" element={<MainProfile />} />
      <Route path="cards" element={<Cards/>}/>
      <Route path="setting" element={<Setting/>}/>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
