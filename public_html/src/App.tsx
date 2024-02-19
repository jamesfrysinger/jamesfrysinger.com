import { ThemeProvider } from "@mui/material";
import AboutMe from "./components/AboutMe";
import Brands from "./components/Brands";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import SkillsExperience from "./components/SkillsExperience";
import "./styles/App.css";
import theme from "./theme/muiTheme";
import Footer from "./components/Footer";
import { FC } from "react";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center  min-h-screen dark:bg-neutral-900 dark:text-neutral-300">
        <div className="w-full max-w-[768px] px-4 lg:px-0 m">
          <Header />
          <AboutMe />
          <SkillsExperience />
          <Brands />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
