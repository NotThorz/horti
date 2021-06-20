import {React,useState} from 'react'
import './Header.css'
const Header = () => {
    let [See,setSee]=useState("See More")
    let [isActive,setActive]=useState("header__nav")
    const ClickHandler=()=>{
        if (isActive==="header__nav"){
            setActive("responsive header__nav")
            setSee("See Less")
        }
        else{
            setActive("header__nav")
            setSee("See More")
        }
    }
    return (
        <div className={isActive} id="myTopnav" >
            <a href='/' className='header__home'>HORTI-PLANTES</a>
            <a href='/Products' className='header__products'>Products</a>
            <a href='/#About' className='header__about'>About</a>
            <a href='/#ContactForm' className='header__contact'>Contact </a>
            <a href='/Products' style={{float: "right",
  marginright: "2px"}} className="SearchMore">Search For Items</a>
            <a href="#dropdown" className="icon" onClick={ClickHandler} style={{textDecoration:"none"}}>{See}</a>
        </div>
    )
}

export default Header
