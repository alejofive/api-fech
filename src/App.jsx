import "./App.css";

import Campaign from "./pages/Campaign";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Campaign />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
