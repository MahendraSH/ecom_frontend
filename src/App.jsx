import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout1 from "./layouts/Layout1";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPage from "./pages/Admin/AdminPage";
import AllUsers from "./pages/Admin/AllUsers";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/admin/products" element={<h1>products</h1>} />
        <Route path="/admin/users/all" element={<AllUsers/>} />



        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
};
export default App;
