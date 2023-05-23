import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
import NotFoundRedirect from "./components/NotFoundRedirect/NotFoundRedirect";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<NotFoundRedirect />} />
    </Routes>
  );
};

export default App;
