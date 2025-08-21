import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./features/layout/view/MainLayout";
import HomePage from "./features/home/view/HomePage";
import AboutPage from "./features/about/view/AboutPage";
import SharingPage from "./features/sharing/views/SharingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/sharing" element={<SharingPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
