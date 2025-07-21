import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';


function MenuItem ({item,price}) {
const [count, setCount]= useState(0);

function handleClick() {
    setCount(count+1)
}

return (
<li>
{item}-{price} <button onClick= {handleClick}>Add to Cart {count}</button>
<FontAwesomeIcon icon={faSeedling}/>
</li>
);
}

export default MenuItem;