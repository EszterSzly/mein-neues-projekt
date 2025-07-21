import MenuItem from "../components/MenuItem";
import menuDataJSON from  "../data/menudata.json";
import { useEffect,useState } from "react";

function Menu(){
    let [menuData, setMenuData] = useState ([]);

    useEffect (() => {
         setMenuData(menuDataJSON);
    }, []);

   
    let menuItemsJSXArray= menuData.map((menuItem) => {
        return <MenuItem key ={menuItem.id} item={menuItem.name} price={menuItem.price} />;
    });
  return (
    <>
    <h1 style={{borderTop: '1px solid #ccc'}}>Menu</h1>
    <ul style={{listStyle: "none"}}>
  {menuItemsJSXArray}
   </ul>

    </>

)
 }

export default Menu;