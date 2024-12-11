import React, { useState ,useRef} from 'react'
import './Navbar.css'
import underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <h1>PAYAL CHAVHAN</h1>
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt=''/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>{setMenu("home")}}>Home</p>{menu == "home" ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu("about")}}>About Me</p>{menu == "about" ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setMenu("services")}}>Services</p>{menu == "services" ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>{setMenu("portfolio")}}>Portfolio</p>{menu == "portfolio" ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("contact")}}>Contact</p>{menu == "contact" ? <img src={underline} alt='' /> : <></>}</AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact to me</AnchorLink></div>
    </div>
  )
}

export default Navbar