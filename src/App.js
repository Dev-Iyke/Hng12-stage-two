import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Form from "./components/Form";
import { useState } from "react";
import Ticket from "./components/Ticket";

function App() {
  const [ticket, setTicket] = useState(null);
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/details" element={<Form setTicket={setTicket} />} />
      <Route path="/ticket" element={<Ticket ticket={ticket} />} />
    </Routes>
  );
}

export default App;
