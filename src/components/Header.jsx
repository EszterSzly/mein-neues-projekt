
import headerpic from '../img/headerpic.jpg';

 function Header(){

return (
     
    <div className="header">
<h1 className="header-title"> Green Garden Cafe </h1>
<p className="header-text">

Welcome to our cozy vegan café – where good vibes meet plant-based delights.  
Everything here is made with love, kindness, and fresh ingredients.  
Grab a coffee, stay a while, and enjoy feel-good food that’s good for you and the planet.
</p>
<img src={headerpic} alt="colourful Cafe" 
className="header-image"/>
        </div>
  )
}
export default Header;