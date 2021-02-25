import { Link } from "react-router-dom";
const Post = ({ post, handleDelete }) => {
  return (
    <Link to={`/post/${post.id}`} className="post">
      <img src={post.image} alt="" />
      <div className="post-author">
        By: {post.author ? post.author : "Admin"}
      </div>
      <h3>{post.title}</h3>
    </Link>
  );
};

export default Post;
