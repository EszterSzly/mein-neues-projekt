
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';


function Highlights(){

return (
     <>
    <div style={{marginTop:'2rem',borderTop: '1px solid #ccc'}}>
        <ul style= {{listStyleType: 'none'}}> 
          <h2>Our highlights</h2>
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