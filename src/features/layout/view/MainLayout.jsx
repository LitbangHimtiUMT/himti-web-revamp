import { Navbar } from "../../layout/components/Navbar";
import Footer from "../../layout/components/Footer";

// eslint-disable-next-line react/prop-types
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        {children}
      </main>
      <Footer />
    </>
  )
}