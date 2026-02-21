import { useState } from "react";
import "./CreatePost.css";
import { posts } from "../data";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import io from "socket.io-client"
const socket = io.connect("http://localhost:9000");
function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState();
const {userId} = useParams()

const navigate = useNavigate();
useEffect(()=>{
const getSingleUser = async()=>{
const res = await fetch(`http://localhost:9000/users/${userId}`);
const data = await res.json();
setData(data)
console.log(data)

}
getSingleUser()
},[])
  const handleSubmit = (e) => {
    e.preventDefault();
   fetch("http://localhost:9000/blogs/",{method:"POST",
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
content,
title,
username:data?.username,
 timestamp: Date().toString().slice(0, 25),
          timeLine: Date.now(),
})},
).then(res=>res.json()).then(data=>console.log(data))
    navigate(`/${userId}`)

    socket.emit("add_blog",{
       
content,
title,
username:data?.username,
 timestamp: Date().toString().slice(0, 25),
          timeLine: Date.now(),
  
  })
  };
 
  return (
    <>
    <Navbar data={data}/>
   <div className="form-page">
  <form className="post-form" onSubmit={handleSubmit}>
    <h2>Create New Post</h2>

    <input
      placeholder="Title"
      value={title}
      onChange={e => setTitle(e.target.value)}
    />

    <textarea
      placeholder="Content"
      value={content}
      onChange={e => setContent(e.target.value)}
    />
      {/* <Link to={"/"} className="btn">Add Post</Link> */}

    <button>Add Post</button>
  </form>
</div>
</>
  );
}

export default CreatePost;
