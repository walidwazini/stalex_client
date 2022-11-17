import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
