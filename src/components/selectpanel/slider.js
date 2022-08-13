
import './select.css'
import {Link} from 'react-router-dom';

export const Slider = ()=>{


    return(
        <div className="slider">
            <div className="slider-left">
                <Link to="/items">
                Food Item
                </Link>
                </div>
            <div className="slider-right">
                <Link to="/favorite">  
                Favourite
                </Link>
              

            </div>


        
        </div>
    )

}