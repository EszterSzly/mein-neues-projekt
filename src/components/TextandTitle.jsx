import { useState } from "react";
import organic from "../img/organic.jpg"

function TextandTitle({title, text}) {




return (
    
    <div
     style={{ 
      display: 'flex', 
      alignItems: 'center',
       gap: '2rem', 
       marginTop: '4rem',
        marginBottom: "4rem",
      borderBottom: '1px solid #ccc',
      paddingBottom:'1rem'
    }}> 
<img 
src={organic} 
alt="green coffee beans"
height="200px"
style={{ borderRadius: '6px'}}
/>
<div>
<h2>{title }</h2>
<p> {text} </p>
        </div>
        </div>
    
     
  )
}
export default TextandTitle;