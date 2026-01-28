import { useState } from "react";
import "./CreatePost.css";
import { posts } from "../data";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    console.log({ title, content }); // later send to backend
    posts.push({ title, content,id:posts.length+1 });
    navigate("/")
  };

  return (
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

  );
}

export default CreatePost;
