import { Link } from "react-router-dom";
import "./Navbar.css";
import Avatar from '@mui/material/Avatar';

function Navbar({data}) {
  console.log(data?.avatar);
   

  return (
    <nav className="navbar">
      <h2 className="logo">MyBlog</h2>
      <div className="navs">
        <Link to={`/${data?._id}`}>Home</Link>
        <Link to={`/${data?._id}/create`}>Create</Link>
         <Avatar
        alt="Remy Sharp"
        src={data?.avatar}
        sx={{ width: 48, height: 48,marginLeft:1.4 }}
      />
      </div>
    </nav>
  );
}

export default Navbar;
