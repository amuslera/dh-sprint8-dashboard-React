import "./sidebar.css"
import {PersonOutlineOutlined, Inventory2Outlined, CategoryOutlined, DashboardOutlined} from "@mui/icons-material"
import {Link} from "react-router-dom"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="sidebarLink" to="/">
                            <DashboardOutlined className="sidebarIcon"/>
                            Totales
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebarLink" to="/users">
                            <PersonOutlineOutlined className="sidebarIcon"/>
                            Listado de usuarios
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebarLink" to="/products">
                    <Inventory2Outlined className="sidebarIcon"/>
                    Listado de productos
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link className="sidebarLink" to="/categories">
                    <CategoryOutlined className="sidebarIcon"/>
                    Listado de categorías
                        </Link>
                    </li>
                </ul>
                </div>
        </div>
    </div>
    );
}
