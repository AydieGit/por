import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () =>{

    return(
        <div className="Navbar">
            <img src= {logo}></img>

            <ul  className="Nav-menu">

                <li><AnchorLink className="anchorLink" href="#Home">Home</AnchorLink></li>
                <li><AnchorLink className="anchorLink" offset={50} href="#About">About me</AnchorLink></li>
                <li><AnchorLink className="anchorLink" offset={50} href="#Portfolio">Portfolio</AnchorLink></li>
                <li><AnchorLink className="anchorLink" offset={50} href="#Contact">Contact</AnchorLink></li>
            </ul>
        </div>
    );
}

export default Navbar
