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
    const [searchTerm, setSearchTerm] =useState("");
    const handleChange = event => {
    setSearchTerm(event.target.value);
  };
    return (
        <div className={isActive} id="myTopnav" >
            <a href='#home' className='header__home'>HORTI-PLANTES</a>
            <a href='#Products' className='header__products'>Products</a>
            <a href='#About' className='header__about'>About</a>
            <a href='#ContactForm' className='header__contact'>Contact </a>
            <a href='#none' style={{float: "right",
  marginright: "2px"}}><input
  style={{fontSize:"20px"}}
            className="header__search"
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleChange}
            /></a>
            <a href="#dropdown" className="icon" onClick={ClickHandler} style={{textDecoration:"none"}}>{See}</a>
        </div>
    )
}

export default Header
