import { ThemeProvider } from "@mui/material";
import AboutMe from "./components/AboutMe";
import Brands from "./components/Brands";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import SkillsExperience from "./components/SkillsExperience";
import "./styles/App.css";
import theme from "./theme/muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center  min-h-screen">
        <div className="w-full max-w-[768px] bg-white px-6 lg:px-0">
          <Header />
          <AboutMe />
          <SkillsExperience />
          <Brands />
          <ContactMe />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
