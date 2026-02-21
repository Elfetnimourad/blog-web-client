import { Link } from "react-router-dom";
import "./PostCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import io from "socket.io-client"
import { posts } from "../data";

const socket = io.connect("http://localhost:9000");

function PostCard({ setPosts,post,data }) {
  const [hidden,setHidden] = useState(false)
  const token = localStorage.getItem("token")
  const deleteBlog = (id)=>{
    
    console.log(id);
      fetch(`http://localhost:9000/blogs/${id}`,{method:"DELETE",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      }).then(data=>console.log(data))
      
  socket.emit("delete_blog",{
        id,
      })
      
    };
   
  return (
    <div className={"card"}>
      <div style={{float:"right"}}>
<DeleteIcon titleAccess="You Can Hide it not deleted,if you are not admin" style={{color:"red"}} onClick={()=>deleteBlog(post._id)}/>
      </div>
      
      <h1>{post?.title}</h1>
      <p>{post?.content.substring(0, 60)}...</p>
  <div style={{display:"flex",justifyContent:"space-between"}}>
     <h4>@{post?.username}</h4>
      <Link to={`/post/${post?._id}`} className="btn">Read More</Link>
  </div>
 
    </div>
  );
}

export default PostCard;
