import logoImg from '../../img/logoshark.jpg'

import './header.scss'

function Header(){
    return(
        <div className="header">
            <div className="container header__container">
                <div className=" header__logo-title">
                <img className="header__logo" src={logoImg} alt="" width={100}/>
                <div class="header__title">Shark Pool</div>
                </div>
               
                <nav className="header__nav">
                    <ul className='header__nav-row'>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                     
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header