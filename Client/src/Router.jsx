import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  Login,
  Register,
  RegisterConfirmation,
  SuccessRegister,
  AddBalance,
  Failed,
  MainProfile,
  SendMoney,
  UserSetting,
} from "./pages/index";

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
