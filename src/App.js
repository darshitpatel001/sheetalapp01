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
// import Product from "./Login/Product";
import Css from "./Route/Css";
import Css1 from "./Route/Css1";
import Css2 from "./Route/Css2";
import Headersw3 from "./Route/Headersw3";
import Html from "./Route/Html";
import Homew3 from "./Route/Homew3";
import Html1 from "./Route/Html1";
import Html2 from "./Route/Html2";
import Javascript from "./Route/Javascript";
import Js1 from "./Route/Js1";
import Js2 from "./Route/Js2";
import { Provider } from "react-redux";
import Counter from "./Thunk/Counter";
// import store from "./Thunk/Store/Store";
import MainUser from "./Thunk/Store/MainUser";
import CounterSaga from "./Thunk/CounterSaga";
import MyPost from "./Thunk/MyPost";
import Myredux1 from "./Redux/Myredux1";
import Myredux2 from "./Redux/Myredux2";
import Myredux3 from "./Redux/Myredux3";
import CounterTool from "./ReduxToolKit/CounterTool";
import { StoreTool } from "./ReduxToolKit/Store/StoreTool";
import { StoreProduct } from "./ReduxToolKit/ProductApi/Store";
import Product from "./ReduxToolKit/ProductApi/Product";
function App() {
  const [Lan, setLan] = useState("en");
  return (
    <div>
      {/* <Languge.Provider value={{ Lan, setLan }}>
        <Header />
        <MyChild1 />
      </Languge.Provider> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productlist" element={<RequireAuth><Product /></RequireAuth>} />
      </Routes>
    </BrowserRouter> */}
      {/* <BrowserRouter>
      <Headersw3 />
      <Routes>
        <Route path='/' element={<Homew3 />}>CSS</Route>
        <Route path='/html' element={<Html />}>
          <Route path='html1' element={<Html1 />} />
          <Route path='html2' element={<Html2 />} />
        </Route>
        <Route path='/css' element={<Css />}>
          <Route path='css1' element={<Css1 />} />
          <Route path='css2' element={<Css2 />} />
        </Route>
        <Route path='/Javascript' element={<Javascript />}>
          <Route path='js1' element={<Js1 />} />
          <Route path='js2' element={<Js2 />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  {/* <Provider store={StoreTool}> */}
      {/* <Counter/>
      <MainUser /> */}
      {/* <CounterSaga /> */}
      {/* <MyPost/> */}
      {/* <Myredux1 />
      <Myredux2 />
      <Myredux3 /> */}
     {/* <CounterTool /> */}
     {/* </Provider> */}
      {/* <Provider store={StoreProduct}>
       <Product />
       </Provider> */}
      <h1>Darshit Akbari</h1>
    </div>
  );
}

export default App;
