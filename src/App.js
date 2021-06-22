import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import './App.css';
import {useState} from "react";

function App() {
  const [open, setOpen] = useState(true)
  const handleMenuOpen=()=>{
    setOpen(!open);

  }
  return (
    <div>
      <Header
      title="Header Title"
      openMenu={handleMenuOpen}/>
      {open&&<Menu closeMenu={handleMenuOpen}/>}
      <Footer text="Footer"/>
    </div>
  );
}

export default App;
