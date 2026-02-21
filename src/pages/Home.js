import { useEffect } from "react";
import PostCard from "../components/PostCard";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import io from "socket.io-client"

const socket = io.connect("http://localhost:9000");

function Home() {
  const {userId} = useParams()
  const [posts,setPosts] = useState([]);
  const [data,setData] = useState();

  


 socket.on("show_data",(data)=>{
    console.log("create post with socket",data);

    setPosts([...posts,data])
  })
useEffect(()=>{
const getSingleUser = async()=>{
const res = await fetch(`http://localhost:9000/users/${userId}`);
const data = await res.json();
setData(data)
console.log(data)

}
getSingleUser()
},[]);
useEffect(()=>{
const getBlogs = async()=>{

const res = await fetch("http://localhost:9000/blogs/");
const data = await res.json();
setPosts(data)
console.log(data)

}
getBlogs()
},[]);
 socket.on("clear_data",(data)=>{
      console.log("deleted blog",data);
      setPosts(posts.filter(p=>p._id !== data.id))
    })
  return (
    <div>
      <Navbar data={data}/>
    <div className="container">
      <h2>Latest Posts</h2>
      {posts?.map(post => (
        <>
        <PostCard key={post.id} setPosts={setPosts} posts={posts} post={post} data={data} />
       
        </>
      ))}
    </div>
    </div>

  );
}
export default Home