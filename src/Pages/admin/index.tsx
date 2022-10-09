import React from "react";
import "./index.css"
import SideMenu from "../../components/side-menu/index.tsx"
import Dashboard from "../dashboard/index.tsx";
import Campaigns from "../campaigns/index.tsx";
import Services from "../services/index.tsx";
import Customers from "../customers/index.tsx";
import Users from "../users/index.tsx";
import { Switch,Route,useRouteMatch } from "react-router-dom"


const Admin = () => {
    let { path,url } = useRouteMatch()
    console.log(path)
    return(
        <div className="dashboard">
            <SideMenu name="Shady"/>
            <Switch>
                <Route exact path={path}>
                    <Dashboard />
                </Route>
                <Route path={`${url}/campaigns`}>
                    <Campaigns />
                </Route>
                <Route  path={`${url}/services`}>
                    <Services />
                </Route>
                <Route  path={`${url}/customers`}>
                    <Customers />
                </Route>
                <Route exact path={`${url}/users`}>
                    <Users />
                </Route>
            </Switch>
        </div>
    )
}

export default Admin