import React from 'react'
import ua from './images/ua.png'
import uk from './images/uk.png'
import ru from './images/ru.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="language">
                <div className="english"><Link to="/ua"><img src={ua} alt="ua" width="20px" height="20px" /></Link></div>
                <div className="russian"><Link to="/uk"><img src={uk} alt="uk" width="20px" height="20px" /></Link></div>
                <div className="ukranian"><Link to="/ru"><img src={ru} alt="ru" width="20px" height="20px" /></Link></div>            </div>
            <div className="cvresume">
                CV-RESUME
            </div>
            <div className="owner">
                <h1>ALEXEY BALABAN</h1>
            </div>
            <div className="profesion">
                <h2> Junior Project Manager</h2>
            </div>
        </div>
    )
}

export default Header