import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./features/home/view/HomePage";
import AboutPage from "./features/about/view/AboutPage"

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
