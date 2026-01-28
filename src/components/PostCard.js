import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post }) {
  return (
    <div className="card">
      <h1>{post.title}</h1>
      <p>{post.content.substring(0, 60)}...</p>
      <Link to={`/post/${post.id}`} className="btn">Read More</Link>
    </div>
  );
}

export default PostCard;
