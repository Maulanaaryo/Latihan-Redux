import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  PostingPage,
  AddPostingPage,
  UpdatePostingPage,
  LoginPage,
  RegisterPage,
} from "../pages";

// import { useSelector } from "react-redux";

const MainContent = () => {
  // const isLogin = useSelector((state) => state.isLogin);

  // if (!isLogin) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/articles" element={<PostingPage />} />
        <Route path="/articles/add" element={<AddPostingPage />} />
        <Route path="/articles/update" element={<UpdatePostingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
