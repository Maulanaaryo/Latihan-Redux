import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Navbar from "./Navbar";

const MainContent = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default MainContent;
