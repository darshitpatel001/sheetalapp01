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
