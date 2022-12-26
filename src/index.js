import React from "react";
import ReactDOM from "react-dom/client";
import "./Axios/Globalaxios";
// import './index.css';
// import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Counter from "./Counter";
import Magic from "./Magic";
import Mydata from "./Mydata";
import Card from "./Card";
import Tasks from "./Tasks";
import Fatch from "./Fatch";
import Fatchapi from "./Fatchapi";
import Axioss from "./Test";
import Test from "./Test";
import Emploayee from "./Emploayee";
import Form from "./Form";
import Formdegree from "./Formdegree";
import Formcoll from "./Formcoll";
import { Formik } from "formik";
import Myformik from "./Myformik";
import Formformik from "./Formformik";
import Carformik from "./Carformik";
import Taskvalidation from "./Taskvalidation";

import Cardlayout from "./Props/Cardlayout";
import Eductiontodo from "./Props/Eductiontodo";
import MyGrid from "./Grid/MyGrid";
import MyGrid2 from "./Grid/MyGrid2";
import MyClass from "./Class/MyClass";
import Apipost from "./Class/Apipost";
import Login from "./Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apipost1 from "./Exam/Apipost1";
import Apipost2 from "./Exam/Apipost2";
import Apipostprect from "./Exam/Apiprecti";
import ApiPrecti1 from "./Exam/ApiPrecti1,";
import MyForm from "./Material Ui/MyForm";
import ReactMemo from "./ReactMemo";
import MyReadMore from "./MyReadMore";
import Counterr from "./Counterr";
import store from "./Reactredux/Store/Store";

import { Provider } from "react-redux";
import UiForm from "./Material Ui/UiForm";
import Audio from "./Audio/Audio";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Router/Header";
import Homee from "./Router/Homee";
import About from "./Router/About";
import Error from "./Router/Error";
import Contact from "./Router/Contact";
import Footer from "./Router/Footer";
import UseEfflimtLeval2 from "./UseEffect/UseEfflimtLeval2";
import CounterUsE from "./UseEffect/CounterUsE";
import Myreducer from "./Reactredux/Myreducer";
import RequireAuth from "./Login/Private/RequireAuth";
import File from "./FileUplode/File";
import Inquiry from "./Inquiry";
import ErrorBoundry from "./Error/ErrorBoundry";
import BuggyCounter from "./Error/BuggyCounter";
import MyAlbum from "./CustomHook/MyAlbum";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter />
    <Home /> */}
    {/* <Magic /> */}
    {/* <Mydata/> */}
    {/* <Card /> */}
    {/* <Tasks /> */}
    {/* -------------------------------api------------------------------------- */}
    {/* <Fatch/> */}
    {/* <Test/> */}
    {/* <Fatchapi /> */}
    {/* <Emploayee/> */}
    {/* -----------------------------form-------------------------------------- */}
    {/* <Form/> */}
    {/* <Formdegree/> */}
    {/* <Formcoll /> */}
    {/* <Myformik /> */}
    {/* <Formformik/> */}
    {/* <Taskvalidation/> */}
    {/* <Cardlayout/> */}
    {/* <Eductiontodo/> */}
    {/* <Carformik/> */}
    {/* -----------------------------grid--------------------------------------- */}
    {/* <MyGrid /> */}
    {/* <MyGrid2 /> */}
    {/* .............................class----------------------------------------- */}
    {/* <MyClass /> */}
    {/* <Apipost /> */}
    <ToastContainer />
    {/* <Login /> */}
    {/* <Apipost1 /> */}
    {/* <Apipost2 /> */}
    {/* <Apipostprect /> */}
    {/* <ApiPrecti1 /> */}
    {/* ---------------------------mul ui---------------------------------------------- */}
    {/* <MyForm /> */}
    {/* <UiForm /> */}
    {/* ---------------------------memo------------- */}
    {/* <ReactMemo /> */}
    {/* <MyReadMore text="My Name Is Darshit.I Am 20 Years Old. I Am Pursuing Bachelors Of Commarce From M.s.University I want to Become a Devloper."/> */}
    {/* -----------------------------------redux------------------------------- */}
    {/* <Provider store={store}>
    {/* <Counterr /> */}
    {/* </Provider> */}
    {/* <Audio /> */}
    {/* -----------------------router------------------------- */}
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter> */}
    {/* ------------------------useE  ROU---------- */}
    {/* <UseEfflimtLeval2 /> */}
    {/* <CounterUsE /> */}

    {/* <Myreducer/> */}
    {/* <App/> */}
    {/* <Inquiry /> */}
    {/* --------------------------------error---------------------- */}
    <ErrorBoundry>
      <BuggyCounter/>
    </ErrorBoundry>
    {/* <File /> */}
    <MyAlbum />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
