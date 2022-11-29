import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const SideMenuData= [
    {
        title:'home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title:'about',
        path:'/about',
        icon:<AiIcons.AiFillInfoCircle/>,
        cName:"nav-text"
    },
    {
        title:'services',
        path:'/services',
        icon:<AiIcons.AiFillFlag/>,
        cName:"nav-text"
    },
    {
        title:'customers',
        path:'/customers',
        icon:<FaIcons.FaUser/>,
        cName:"nav-text"
    },
    {
        title:'work',
        path:'/work',
        icon:<FaIcons.FaBriefcase/>,
        cName:"nav-text"
    },
]
