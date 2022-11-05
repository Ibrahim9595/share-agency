import React, { useState } from "react";
import "./index.css"

const ServiceCard = ({ name, url, logo, desc }) => {
    const [isLoaded, handleLoad] = useState(false)
    return (
        <div className="service-card-container">
            <div className="header-container">
                <div className="service-header">
                    <img src={logo}
                        alt="service" className="service-icon"
                        loading="lazy"
                    />

                    <span>{name}</span>
                </div>
                <p className="desc">
                    {desc}
                </p>
            </div>

            <img src={url} alt="serv_work" className="prev-work" loading="lazy" onLoad={() => handleLoad(!isLoaded)} />

        </div>
    )
}
export default ServiceCard