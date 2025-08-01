
import { useState } from "react";
import Section from "../components/Section";
import Aboutpic from "../img/Aboutpic.jpg"
import Footer from "../components/Footer";

function About () {
let [userEmail, setUserEmail] = useState ("");

function handleChange (e){
  setUserEmail(e.target.value);

}
  function handleClick() {
    alert(`Do you want to subscribe with this email? ${userEmail}`);
  }
    return (
        <>
 <div>
        <img src={Aboutpic} alt="Sustainability" className="about-image" />
        </div>
        <div style={{marginTop:"1rem",borderTop: "1px solid #ccc"}}>
    <Section  id="About"
        title="About Us"
        text={`Our vegan café was born from a simple idea: 
to create a cozy, welcoming space where plant-based food and good coffee come together. 
Inspired by a love for animals, nature, and flavor, we wanted to offer something kind, creative, and delicious.
Everything on our menu is made with care — fully vegan, often seasonal, and always full of taste. 
Whether you are vegan or just curious, we’re happy to have you here.💚`} />
</div>
<div style= {{ marginBottom:'2rem', marginTop:'2rem'}}>
            <Section
                id="Commitment"
                title="Our Commitment"
                text={`We believe in more than just great food — a part of every purchase supports environmental and animal welfare causes.
     By choosing us, you help protect the planet and its creatures. 
     Together, we can enjoy delicious, cruelty-free food while making a positive impact that goes far beyond the plate.  
Thank you for being part of this journey.  
`} />

</div>
            <div className="about-subscribe" >
                <p>subscribe to get special offers!</p>
                <input type="email"
                value={userEmail} 
                onChange={handleChange} />
                <button onClick={handleClick}>Subscribe</button>
</div>

<div>
                <Footer/>

        </div>    
        </>

    );
}

export default About;