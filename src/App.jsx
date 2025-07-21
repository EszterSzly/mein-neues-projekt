
import './App.css'
import { useState } from 'react';
import Header from "./components/Header";
import Highlights from './components/Highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Section from './components/Section';



function App() {
  const [pageName, setPageName]=useState("Home");

  function onClickPage (newPageName){
    setPageName(newPageName);
  }

  return (
    <>

    <MyNavbar onClickPage={setPageName}/>
{pageName === "Home" && <Home/>}
   {pageName === "Menu" && <Menu/>}
   
   </>
  );
}

export default App;
