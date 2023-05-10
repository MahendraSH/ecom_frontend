import React from "react";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1 className="">Main</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
export default App;
