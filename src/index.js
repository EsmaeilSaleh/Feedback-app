import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import AboutPage from "./pages/AboutPage";
import Header from './components/Header'
import Post from './components/Post'
import P404 from './components/P404'


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="post/:id" element={<Post />} />
      <Route path="*" element={<P404 />} />
    </Routes>
  </BrowserRouter>
);
