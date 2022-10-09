import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

export const AdminSideMenuData= [
    {
        title:'Dashboard',
        path:'',
        icon:<BsIcons.BsSpeedometer/>,
        cName:"side-item-text"
    },
    {
        title:'Campaigns',
        path:'/campaigns',
        icon:<BsIcons.BsFillMegaphoneFill/>,
        cName:"side-item-text"
    },
    {
        title:'services',
        path:'/services',
        icon:<AiIcons.AiFillFlag/>,
        cName:"side-item-text"
    },
    {
        title:'Customers',
        path:'/customers',
        icon:<BsIcons.BsFillPeopleFill/>,
        cName:"side-item-text"
    },
    {
        title:'Users',
        path:'/users',
        icon:<FaIcons.FaUserCog />,
        cName:"side-item-text"
    }
]
