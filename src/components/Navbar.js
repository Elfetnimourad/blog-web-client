import { Link } from "react-router-dom";
import "./Navbar.css";
import Avatar from '@mui/material/Avatar';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyBlog</h2>
      <div className="navs">
        <Link to="/">Home</Link>
        <Link to="/create" >Create</Link>
         <Avatar
        alt="Remy Sharp"
        src=""
        sx={{ width: 48, height: 48,marginLeft:1.4 }}
      />
      </div>
    </nav>
  );
}

export default Navbar;
