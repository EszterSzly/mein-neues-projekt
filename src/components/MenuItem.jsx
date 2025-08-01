
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';


function MenuItem ({item,price}) {


return (
<li className="">
{item}-{price}
<FontAwesomeIcon icon={faSeedling}/>
</li>
);
}

export default MenuItem;