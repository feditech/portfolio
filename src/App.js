import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar";
import IntroSection from "./websections/intro";
import AboutSection from "./websections/about";
import { BrowserRouter } from "react-router-dom";
import ServicesSection from "./websections/services";
import PortfolioSection from "./websections/portfolio";
import SkillsSection from "./websections/skills";
import TestinomialSection from "./websections/testinomial";
import BlogsSection from "./websections/blogs";
import ContactSection from "./websections/contact";
import FooterSection from "./websections/footer";

function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <div
        className=""
        style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      >
        <Navbar />
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <TestinomialSection />
        <BlogsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
