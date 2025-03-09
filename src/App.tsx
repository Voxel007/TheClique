// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
