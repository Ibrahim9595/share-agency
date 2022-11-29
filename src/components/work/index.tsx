import React from "react";

import { workData } from "../../helper/WorkData";
import "./index.css"

const Work = () => {
    return(
        <div className="work">
            {workData.map(work=>{return(
                <img src={work.path} alt="work" loading="lazy" />
            )})}
        </div>
    )
}
export default Work