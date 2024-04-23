import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar";
import IntroSection from "./websections/intro";
import AboutSection from "./websections/about";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <div
        className="bg-primary dark:bg-primary-dark dark:text-white "
        style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      >
        <Navbar />
        <IntroSection />
        <AboutSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
