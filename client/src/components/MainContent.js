import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ContactPage,
  PostingPage,
  AddPostingPage,
  UpdatePostingPage,
} from "../pages";

const MainContent = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/articles" element={<PostingPage />} />
        <Route path="/articles/add" element={<AddPostingPage />} />
        <Route path="/articles/update" element={<UpdatePostingPage />} />
      </Routes>
    </div>
  );
};

export default MainContent;
