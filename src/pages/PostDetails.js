import { useParams } from "react-router-dom";
import { posts } from "../data";
import "./PostDetails.css";

function PostDetails() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  return (
    <div className="post-wrapper">
      <article className="post">
        <h1 className="post-title">{post.title}</h1>

        <div className="post-meta">
          <span>✍️ By Admin</span>
          <span>📅 Jan 2026</span>
          <span>⏱ 5 min read</span>
        </div>

        <div className="post-divider"></div>

 <p className="post-content">{post.content}</p>

       
      </article>
    </div>
  );
}

export default PostDetails;
