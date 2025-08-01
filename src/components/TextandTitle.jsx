import { useState } from "react";
import organic from "../img/organic.jpg"

function TextandTitle({title, text}) {




return (
    
    <div className="text-title"> 
<img 
src={organic} 
alt="green coffee beans"
className="text-image"
/>
<div>
<h2>{title}</h2>
<p> {text} </p>
        </div>
        </div>
    
     
  )
}
export default TextandTitle;