import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import "./styles/main.css";
import Login from "./auth/login";
import Register from "./auth/Register";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/:userId" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/:userId/create" element={<CreatePost />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
