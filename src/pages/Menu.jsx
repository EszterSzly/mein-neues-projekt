import MenuItem from "../components/MenuItem";
import menuDataJSON from  "../data/menudata.json";
import { useEffect,useState } from "react";
import menupic from "../img/menupic.jpg";
import Footer from "../components/Footer"


function Menu(){
    let [menuData, setMenuData] = useState ([]);

    useEffect (() => {
         setMenuData(menuDataJSON);
    }, []);

   
    let menuItemsJSXArray= menuData.map((menuItem) => {
        return <MenuItem key ={menuItem.id} item={menuItem.name} price={menuItem.price} />;
    });
  return (
    <div >
      <h2 className="menu-heading">Our Menu</h2>
      <p>A little taste of kindness in every bite.</p>
      <img src ={menupic}
       alt= "cake" 
       height="250px"
        className="menu-image"/>

      <ul className="menu-list">
  {menuItemsJSXArray}
   </ul>
   <Footer/>
    </div>

)
 }

export default Menu;