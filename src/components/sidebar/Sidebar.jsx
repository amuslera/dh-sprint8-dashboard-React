import "./sidebar.css"
import {PersonOutlineOutlined, Inventory2Outlined, CategoryOutlined, DashboardOutlined} from "@mui/icons-material"
import { NavLink} from "react-router-dom"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Menu de opciones:</h3>
                <ul className="sidebarList">
                    <li>
                        <NavLink 
                            to="/"
                            className="sidebarLink"
                            activeClassName="active">
                            <DashboardOutlined className="sidebarIcon"/>
                            Ultimos datos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/users"
                        className="sidebarLink"
                        activeClassName="active">
                            <PersonOutlineOutlined className="sidebarIcon"/>
                            Listado de usuarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/products"
                        className="sidebarLink"
                        activeClassName="active">
                            <Inventory2Outlined className="sidebarIcon"/>
                            Listado de productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/categories" 
                        className="sidebarLink"
                        activeClassName="active">
                            <CategoryOutlined className="sidebarIcon"/>
                            Listado de categorías
                        </NavLink>
                    </li>
                </ul>
                </div>
        </div>
    </div>
    );
}
