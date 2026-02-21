import { useParams } from "react-router-dom";
import { posts } from "../data";
import "./PostDetails.css";
import { useEffect } from "react";
import { useState } from "react";

function PostDetails() {
  const { id } = useParams();
    const [product, setProduct] = useState(null);
const getSingleBlog = async()=>{
  console.log(id)
  try {
        const res = await fetch(`http://localhost:9000/blogs/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log("Error fetching post:", err);
      }
    
    };
useEffect(()=>{

    
     getSingleBlog();
},[])
  if (!product) return <h2>Loading post...</h2>;

  // const post = posts.find(p => p.id === Number(id));
console.log(product)
  return (
    <div className="post-wrapper">
      <article className="post">
        <h1 className="post-title">{product.title}</h1>

        <div className="post-meta">
          <span>✍️ By {product.username}</span>
          <span>📅 {product.timestamp.split(" ")[1]+ product.timestamp.split(" ")[3]}</span>
          <span>⏱ 5 min read</span>
        </div>

        <div className="post-divider"></div>

 <p className="post-content">{product.content}</p>

       
      </article>
    </div>
  );
}

export default PostDetails;
