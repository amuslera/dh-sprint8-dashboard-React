import "./sidebar.css"
import {PersonOutlineOutlined, Inventory2Outlined, CategoryOutlined, DashboardOutlined} from "@mui/icons-material"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <DashboardOutlined className="sidebarIcon"/>
                    Totales
                    </li>
                    <li className="sidebarListItem">
                    <PersonOutlineOutlined className="sidebarIcon"/>
                    Listado de usuarios
                    </li>
                    <li className="sidebarListItem">
                    <Inventory2Outlined className="sidebarIcon"/>
                    Listado de productos
                    </li>
                    <li className="sidebarListItem">
                    <CategoryOutlined className="sidebarIcon"/>
                    Listado de categorías
                    </li>
                </ul>
                </div>
        </div>
    </div>
    );
}
