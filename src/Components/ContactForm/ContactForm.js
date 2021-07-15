import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className="contact__main" >
            <h1 className="contact__h">
                Contact
            </h1>
            <div>
                <ul className="contact__ul">
                    <li>Notre Email: horti-plantes@gmail.com</li>
                    <li>Nous appelez : (+212) 661-193343</li>
                    <li>Rendez noud visite : <a href="https://goo.gl/maps/1wkJ51dkTye5Pt8R7"> Google Maps</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default ContactForm
