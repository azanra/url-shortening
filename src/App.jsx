import "./App.css";
import Footer from "./components/footer";
import GetStarted from "./components/getStarted";
import Header from "./components/header";
import Hero from "./components/hero";
import Info from "./components/info";
import UrlWrapper from "./components/url";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-(--Gray-Light)">
        <UrlWrapper />
        <Info />
      </div>
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
