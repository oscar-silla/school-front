import { Navbar, Video } from "../../components";
import Events from "./events";
import LastNews from "./last-news";
import Slogan from "./slogan";

const Home = () => {
  return (
    <>
      <Navbar />
      <Video />
      <LastNews />
      <Events />
      <Slogan />
    </>
  );
};

export default Home;
