import React from 'react'
import ua from '../images/ua.png'
import uk from '../images/uk.png'
import ru from '../images/ru.png'
import { Link} from 'react-router-dom'

const HeaderRu = () => {
    return (
        <div className="header">
            <div className="language">
                <div className="english"><Link to="/ua"><img src={ua} width="20px" height="20px" /></Link></div>
                <div className="russian"><Link to="/uk"><img src={uk} width="20px" height="20px" /></Link></div>
                <div className="ukranian"><Link to="/ru"><img src={ru} width="20px" height="20px" /></Link></div>            </div>
            <div className="cvresume">
                РЕЗЮМЕ
            </div>
            <div className="owner">
                <h1>БАЛАБАН АЛЕКСЕЙ НИКОЛАЕВИЧ</h1>
            </div>
            <div className="profesion">
                <h2>Junior Progect Manager</h2>
            </div>
        </div>
    )
}

export default HeaderRu