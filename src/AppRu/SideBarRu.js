import React from 'react'
import Photo from '../images/photo.jpeg'
import location from '../images/location.png'
import person from '../images/person.png'
import mobile from '../images/mobile.png'
import email from '../images/email.png'
import web from '../images/web.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import telegram from '../images/telegram.png'
import skype from '../images/skype.png'
import instagram from '../images/instagram.png'
import './sidebar.css'

const SideBar = () => {
    return (
        <div className="side_bar">
            <div className="myPhoto">
                <img src={Photo} />
            </div>
            <div className="blocks">
                <h2>Информация</h2>
            </div>
            <div className="info">

                <div className="name">
                    <p className="fig"> <img src={person} /></p>
                    <h4>Имя</h4>
                    <p>Алексей Балабан</p>
                </div>
                <div className="adress">
                    <p className="fig"><img src={location} /></p>
                    <h4>Адрес</h4>
                    <p>Украина, Киев 02232</p>
                </div>
                <div className="phone">
                    <p className="fig"><img src={mobile} /></p>
                    <h4>Моб. Тел</h4>
                    <p>+380685975539</p>

                </div>
                <div className="email ">
                    <p className="fig"><img src={email} /></p>
                    <h4>Имейл</h4>
                    <p>alexey.balaban1989@gmail.com </p>
                </div>
                <div className="website">
                    <p className="fig"><img src={web} /></p>
                    <h4>Веб-страница</h4>
                    <p>here is website</p>
                </div>
            </div>
            <div className="blocks">
                <h2 className>Соцсети</h2>
            </div>
            <div className="social">

                <div className="linkedin">
                    <p className="fig"><img src={linkedin} width='32' height='32' /></p>
                    <a href="https://www.facebook.com/profile.php?id=100013490269128" target="blank" alt="Linkedin"><h4>Linkedin</h4></a>
                </div>
                <div className="facebook">
                    <p className="fig"> <img src={facebook} /></p>
                    <a href="https://www.facebook.com/profile.php?id=100013490269128" target="blank" alt="Facebook"><h4>Facebook</h4></a>
                </div>
                <div className="telegram">
                    <p className="fig"><img src={telegram} width='32' height='32' /></p>
                    <a href="https://t.me/AlexeyBalaban" target="blank" alt="Telegram"><h4>Telegram</h4></a>
                </div>
                <div className="skype">
                    <p className="fig"> <img src={skype} width='32' height='32' /></p>
                    <a href="https://join.skype.com/invite/edyse7tlmrv6" target="blank" alt="Facebook"><h4>Skype</h4></a>
                </div>
                <div className="instagram">
                    <p className="fig">
                        <img src={instagram} width='32' height='32' align="center" /></p>
                    <a href="https://www.instagram.com/balabanalexey/?r=nametag" target="blank" alt="Instagram"><h4>Instagram</h4></a>
                </div>
            </div>
        </div>
    )
}

export default SideBar