import React from "react"
import CountUp from 'react-countup'
import './index.css'

const Counter = ({ title, end, duration = 2 }) => {
    return (
        <div className="counter">
            <span className="counter-title">{title}</span>
            <CountUp end={end} delay={1} duration={duration} className="counter-text" />
        </div>
    )
}

export default Counter