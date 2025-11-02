import { Outlet } from "react-router-dom";
import Navbar from "../../layout/components/Navbar";
import Footer from "../../layout/components/Footer";
import { GridBackground } from "../../../components/Background/index";

export default function MainLayout() {
  return (
    <GridBackground>
      <Navbar />
      <main className="pt-10">
        <Outlet />
      </main>
      <Footer />
    </GridBackground>
  );
}
