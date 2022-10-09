import React from "react"
import "./index.css"
import { AdminSideMenuData } from "../../helper/AdminMenuData"
import { FaUserAlt } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom"

const SideMenu = ({ name }) => {
    let {  url } = useRouteMatch()
    const handleClick = (e) =>{
        // e.currentTarget.classList.toggle('active');
        console.log(e)
    }
    return (
        <nav className="side-menu">
            <div className="user">
                <FaUserAlt />
                <span className="name">{name}</span>
            </div>
            <ul className="side-menu-items">
                {AdminSideMenuData.map((item, i) => {
                    return (
                        <Link to={`${url}${item.path}`} key={i}>
                            <li className={item.cName} onClick={()=>{handleClick(this)}}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
            <Link to="/" className="logout">
                <span>Logout</span>
                <FiLogOut />
            </Link>
        </nav>
    )
}

export default SideMenu