
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';


function Highlights(){

return (
     <>
    <div className="highlights">
      <h2>Our highlights</h2>
        <ul style= {{listStyleType: 'none'}}> 
          
<li>
  Strawberry Matcha with Plant Milk-5.00€ <FontAwesomeIcon icon={faSeedling}/>

</li>
<li>
  Iced Oat Chocolate Latte-4.90€ <FontAwesomeIcon icon={faSeedling}/>
  </li>
<li>
  Pistachio Soja Cappucino-5.10€ <FontAwesomeIcon icon={faSeedling}/>
</li>

        </ul>

    </div>
     
    </>
  )
}
export default Highlights;