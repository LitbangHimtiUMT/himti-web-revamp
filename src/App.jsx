import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./features/global/components/ScrollToTop/index";

import MainLayout from "./features/layout/view/MainLayout";
import HomePage from "./features/home/view/HomePage";
import AboutPage from "./features/about/view/AboutPage";
import SharingPage from "./features/sharing/views/SharingPage";
import CommingSoonPage from "./features/display/view/CommingSoonPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/sharing" element={<SharingPage />} />

          {/* Only 3 Page */}
          <Route path="/artikel" element={<CommingSoonPage />} />
          <Route path="/tutorial" element={<CommingSoonPage />} />
          <Route path="/agenda" element={<CommingSoonPage />} />
          <Route path="/dosen" element={<CommingSoonPage />} />
          <Route path="/klinik" element={<CommingSoonPage />} />
          <Route path="/sertifikat" element={<CommingSoonPage />} />
          <Route path="/pendaftaran" element={<CommingSoonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
