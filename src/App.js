import { useState } from "react";
import Navbar from "./Components/Home/Navbar/Navbar";
import Homepage from "./Components/Home/HomePage/Homepage";
import About from "./Components/About/About";
import "./App.css";
import Roadmap from "./Components/Roadmap/Roadmap";
import TheTeam from "./Components/TheTeam/TheTeam";
import Faqs from "./Components/FAQs/Faqs";
import Community from "./Components/Community/Community";
import Modal from "./Components/Home/Modal/Modal";
import Contact from "./Components/Contact/Contact";
function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <Homepage />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <About />
      <Roadmap />
      <TheTeam />
      <Faqs />
      <Community />
      <Contact />
    </>
  );
}

export default App;
