
import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Menu from './pages/Menu';
import Home from './pages/Home';
import About from './pages/About';



function App() {
  const [pageName, setPageName]=useState("Home");

  function onClickPage (newPageName){
    setPageName(newPageName);
  


}
  return (
    <>

    <MyNavbar style={{padding:0, marginTop:0}} onClickPage={setPageName}/>
{pageName === "Home" && <Home/>}
   {pageName === "Menu" && <Menu/>}
   {pageName === "About" && <About/>}
   
   </>
  );
}

export default App;
