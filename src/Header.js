import React from 'react'
import ua from './images/ua.png'
import uk from './images/uk.png'
import ru from './images/ru.png'
import { NavLink, Router } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="language">
                <div className="english"><NavLink to="/ua"><img src={ua} alt="ua" width="20px" height="20px" /></NavLink></div>
                <div className="russian"><NavLink to="/uk"><img src={uk} alt="uk" width="20px" height="20px" /></NavLink></div>
                <div className="ukranian"><NavLink to="/ru"><img src={ru} alt="ru" width="20px" height="20px" /></NavLink></div>            </div>
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