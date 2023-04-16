import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaTypes from "./components/PizzaTypes";
import Slides from "./components/Slides";

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <About />
      <PizzaTypes/>
      <Footer />
    </>
  );
}

export default App;
