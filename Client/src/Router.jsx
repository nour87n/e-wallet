import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Home from "./Home/Home";
import Login from "./authentication/Login";

import Register from "./authentication/Register.jsx";
import RegisterConfirmation from "./authentication/RegisterConfirmation.jsx";

import MainProfile from "./profile/MainProfile.jsx";



import SuccessRegister from "./authentication/SuccessRegister.jsx";
import UserSetting from "./profile/UserSetting.jsx";
import SendMoney from "./profile/SendMoney.jsx";
import Failed from "./profile/Failed.jsx";
import AddBalance from "./profile/AddBalance.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="confirm-register" element={<SuccessRegister/>}/>
      <Route path="register" element={<Register />} />
      <Route path="confirm-register" element={<RegisterConfirmation />} />
      <Route path="profile-setting" element={<UserSetting />} />
      <Route path="main-profile" element={<MainProfile />} />
      <Route path="send-money" element={<SendMoney/>}/>
      <Route path="add-balance" element={<AddBalance/>}/>
      
      <Route path="error" element={<Failed/>}/>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
