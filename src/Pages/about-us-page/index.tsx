import React from "react"
import About from "../../components/about-us/index.tsx"
import Counter from "../../components/Counter/index.tsx"
import './index.css'

const AboutPage = () =>{
    return(
        <div className="about">
            <About />
            <div className="counter-container">
                <Counter title='Customers' end={500} />
                <Counter title='Messages' end={1500} duration={3} />
                <Counter title='Campaigns' end={2500} duration={4} />
                
            </div>
        </div>
    )
}
export default AboutPage