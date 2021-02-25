import Post from "./Post";
import useFetch from "../../useFetch";

const Posts = () => {
  let { data: posts, isLoading, errMsg } = useFetch(
    "http://localhost:4000/posts"
  );
  return (
    <section className="posts">
      {/* <h2 onClick={changeName}>{name}</h2> */}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      {isLoading && <div>loading ...</div>}
      {!posts && !isLoading && !errMsg && (
        <div className="not-found">No Posts</div>
      )}
      {errMsg && <div className="error">{errMsg}</div>}
    </section>
  );
};

export default Posts;
