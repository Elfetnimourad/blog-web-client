import { posts } from "../data";
import PostCard from "../components/PostCard";

function Home() {
  return (
    <div className="container">
      <h2>Latest Posts</h2>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
export default Home