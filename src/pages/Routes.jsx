import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Subjects from "./Subjects";
import NoticeBoard from "./Notice/NoticeBoard";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/noticeBoard" element={<NoticeBoard />} />
    </Routes>
  );
};

export default index;
