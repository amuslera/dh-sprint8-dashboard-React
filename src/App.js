import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import "./components/app.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import CategoriesTable from "./pages/CategoriesTable/CategoriesTable";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="containerApp">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />  
          <Route path="/users" element={<UserList />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/categories" element={<CategoriesTable/>} />
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
