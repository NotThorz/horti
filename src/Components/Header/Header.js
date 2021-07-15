import {React,useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    let [See,setSee]=useState("Plus")
    let [isActive,setActive]=useState("header__nav")
    const ClickHandler=()=>{
        if (isActive==="header__nav"){
            setActive("responsive header__nav")
            setSee("Moins")
        }
        else{
            setActive("header__nav")
            setSee("Plus")
        }
    }
    return (
        <div className={isActive} id="myTopnav" >
            <a href='/' className='header__home'>Coin Des Plantes</a>
            <Link to='/Products' className='header__products'>Produits</Link>
            <a href='/#About' className='header__about'>À propos</a>
            <a href='/#ContactForm' className='header__contact'>Contact </a>
            <Link to='/Products' style={{float: "right",
  marginright: "2px"}} className="SearchMore">Chercher Un Produit</Link>
            <a href="#dropdown" className="icon" onClick={ClickHandler} style={{textDecoration:"none", position:"relative"}}>{See}</a>
        </div>
    )
}

export default Header
