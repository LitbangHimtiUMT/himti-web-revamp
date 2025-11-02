import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes";
import ScrollToTop from "./lib/ScrollToTop";
import ScrollToHasElement from "./lib/ScrollToHashElement";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHasElement />
      <AppRoutes />
    </Router>
  );
}

export default App;
