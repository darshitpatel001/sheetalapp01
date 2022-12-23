import logo from "./logo.svg";
import "./App.css";
import CreateContext from "./UseContaxt/CreateContext";
import MyChild1 from "./UseContaxt/MyChild1";
import { useState } from "react";
import Header from "./UseContaxt/Header";
import Languge from "./UseContaxt/CreateContext";
import About from "./Router/About";
import Login from "./Login/Login";
import RequireAuth from "./Login/Private/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Login/Product";
import css from "./Route/Css"
import css1 from "./Route/Css1"
import css2 from "./Route/Css2"
import Headersw3 from "./Route/Headersw3"
import Html from "./Route/Html"
import Html1 from "./Route/Html1"
import Html2 from "./Route/Html2"
import Javascript from "./Route/Javascript"
import Js1 from "./Route/Js1"
import Js2 from "./Route/Js2"

function App() {
  const [Lan, setLan] = useState("en");
  return (
    <div>
      {/* <Languge.Provider value={{ Lan, setLan }}>
        <Header />
        <MyChild1 />
      </Languge.Provider> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productlist" element={<RequireAuth><Product /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
