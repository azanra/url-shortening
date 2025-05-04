import "./App.css";
import GetStarted from "./components/getStarted";
import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";
import Url from "./components/url";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Url />
      <Info />
      <GetStarted />
    </>
  );
}

export default App;
