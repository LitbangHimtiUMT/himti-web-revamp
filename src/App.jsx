import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./features/global/components/ScrollToTop/index";

import MainLayout from "./features/layout/view/MainLayout";
import HomePage from "./features/home/view/HomePage";
import AboutPage from "./features/about/view/AboutPage";
import SharingPage from "./features/sharing/views/SharingPage";
import CommingSoonPage from "./features/display/view/CommingSoonPage";
import Sertifikat from "./features/sertifikat/view/SertifikatView";
import Agenda from "./features/agenda/view/AgendaView";
import Klinik from "./features/klinik/view/KlinikView";

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
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/dosen" element={<CommingSoonPage />} />
          <Route path="/klinik" element={<Klinik />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="/pendaftaran" element={<CommingSoonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
