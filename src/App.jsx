import TestComponet from "./TestComponet";
import "./App.css"
import CardName from "./CardName";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <>

<Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
       
    </>
  );
}

export default App;
