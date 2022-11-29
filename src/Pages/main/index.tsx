import React from "react"
import './index.css'
import Home from '../../components/home/index.tsx';
import About from '../../components/about-us/index.tsx';
import Customers from '../../components/our-customers/index.tsx';
import Contact from '../../components/contact-us/index.tsx';
import Services from '../../components/services/index.tsx';
import {BsFillTelephoneFill} from "react-icons/bs"

const Main = () => {
    return (
        <div className="main-container" >
            <Home />
            <About />
            <Customers />
            <Services />
            <Contact />
            <a href="tel:+201069960013" className="phone"><BsFillTelephoneFill/></a>
        </div>
    )
}

export default Main

