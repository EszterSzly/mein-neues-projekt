import { useState } from "react";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import TextandTitle from "../components/TextandTitle";
import Section from '../components/Section';



export default function Home() {

let [userEmail, setUserEmail] = useState ("");

function handleChange (e){
  setUserEmail(e.target.value);


}

  function handleClick() {
    alert(`Do you want to subscribe with this email? ${userEmail}`);

  }
  
  return (
    <div>
      <Header />
      <Highlights />
     <TextandTitle title= "Our Promise" text= {`Everything here is 100% organic — from our beans to our baked goodies. We believe in keeping it real and natural, so you get the purest flavors without any nasties.
Good for you,good for the planet, and always made with love. That’s our vibe.`}/>
<Section
id="About"
title="About Us"
text= {`Our vegan café was born from a simple idea: 
to create a cozy, welcoming space where plant-based food and good coffee come together. 
Inspired by a love for animals, nature, and flavor, we wanted to offer something kind, creative, and delicious.
Everything on our menu is made with care — fully vegan, often seasonal, and always full of taste. Whether you are vegan or just curious, we’re happy to have you here.
 Let’s enjoy good food, slow moments, and a little more compassion. 💚`}
 />
 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
 <p style={{margin:0}}>subscribe to get special offers!</p>
<input value = {userEmail} onChange ={handleChange} />
<button onClick={handleClick}>Subscribe</button>
     </div>
    </div>
  );
}
