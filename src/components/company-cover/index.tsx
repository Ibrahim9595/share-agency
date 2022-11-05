import React from "react";
import "./index.css"

const Cover = ({logo,name})=>{
    return(
        <div className="cover-container">
            <div className="color-part"></div>
            <div className="white-part">
                <div className="full-pattern">
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />
                </div>
                <div className="mobile-pattern">
                <img src="..\resources\images\pattern.png" alt="pattern" className="pattern" />

                </div>
            </div>
            <div className="company-details">
                <img src={logo} alt="logo" className="company-logo"/>
                <h2 className="company-header">{name}</h2>
            </div>
        </div>
    )
}
export default Cover