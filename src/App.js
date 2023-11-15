import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar";

function App() {
  const { i18n } = useTranslation();
  return (
    <div
      className="bg-primary dark:bg-primary-dark dark:text-white "
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <Navbar />
    </div>
  );
}

export default App;
