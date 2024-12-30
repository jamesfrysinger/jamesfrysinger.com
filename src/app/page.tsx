import Contact from "@/app/components/sections/Contact";
import Header from "@/app/components/layout/Header";
import Profile from "@/app/components/sections/Profile";
import Technology from "@/app/components/sections/Technology";
import Work from "@/app/components/sections/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <Work />
      <Profile />
      <Technology />
      <Contact />
    </div>
  );
};

export default Home;
