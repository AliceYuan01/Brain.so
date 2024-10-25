// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ChatbotPage from "./pages/ChatbotPage"; // Ensure this imports the new ChatbotPage

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/chatbot">Chatbot</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatbotPage />} />{" "}
          {/* ChatbotPage includes the Chatbot component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
