import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import { Loader } from "./UI/Loader/Loader";

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route element={route.element} path={route.path} key={route.path} />
          ))
        : publicRoutes.map((route) => (
            <Route element={route.element} path={route.path} key={route.path} />
          ))}
          {!isAuth && <Route path="*" element={<Navigate to={"/login"}/>}></Route>}
          {isAuth && <Route path="*" element={<Navigate to="/error" />} />}
    </Routes>
  );
};
