import "./App.css";
import Footer from "./components/footer";
import GetStarted from "./components/getStarted";
import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";
import Url from "./components/url";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Url />
      <Info />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
