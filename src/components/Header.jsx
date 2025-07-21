
import headerpic from '../img/headerpic.jpg';

 function Header(){

return (
     <>
    <div style= {{marginTop:'2rem'}}>
<h1 style={{borderBottom:'1px solid #ccc', marginBottom: '1rem'}}> Green Garden Cafe </h1>
<p>

Welcome to our cozy vegan café – where good vibes meet plant-based delights.  
Everything here is made with love, kindness, and fresh ingredients.  
Grab a coffee, stay a while, and enjoy feel-good food that’s good for you and the planet.
</p>
<img src={headerpic} alt="colourful Cafe" 
height="300px"
style={{ borderRadius: '4px',borderBottom: '1px solid #ccc' }}/>
        </div>
     
    </>
  )
}
export default Header;