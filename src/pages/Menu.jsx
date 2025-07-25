import MenuItem from "../components/MenuItem";
import menuDataJSON from  "../data/menudata.json";
import { useEffect,useState } from "react";
import menupic from "../img/menupic.jpg";

function Menu(){
    let [menuData, setMenuData] = useState ([]);

    useEffect (() => {
         setMenuData(menuDataJSON);
    }, []);

   
    let menuItemsJSXArray= menuData.map((menuItem) => {
        return <MenuItem key ={menuItem.id} item={menuItem.name} price={menuItem.price} />;
    });
  return (
    <div>
      <h2 style={{marginTop:'2rem',borderBottom:'1px solid #ccc' }}>Our Menu</h2>
      <p>A little taste of kindness in every bite.</p>
      <img src ={menupic} alt= "cake" height="250px"
      style= {{marginTop: '1rem', marginBottom:'1rem', borderRadius: '0.5rem'}}  />
      
    <ul style={{listStyle: "none", borderBottom:'1px solid #ccc', marginBottom:'5rem'}}>
  {menuItemsJSXArray}
   </ul>

    </div>

)
 }

export default Menu;