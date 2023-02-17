import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <header>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/aboutus'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/news'>News</NavLink>
          </li>
        </ul>
      </header>
    )
} 

export default Header