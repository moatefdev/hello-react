import useFetch from "../../useFetch";

const PostDetails = (props) => {
  console.log(props.match.params.id);
  let { data: post, isLoading, errMsg } = useFetch(
    `http://localhost:4000/posts/${props.match.params.id}`
  );
  const handleDelete = () => {
    fetch(`http://localhost:4000/posts/${props.match.params.id}`, {
      method: "DELETE",
    }).then(() => {
      props.history.push("/");
    });
  };
  return (
    <>
      {isLoading && <div>loading ...</div>}
      {errMsg && <div className="error">{errMsg}</div>}
      {post && !isLoading && !errMsg && (
        <article className="container post-details">
          <div className="post-details-title">
            <h1>{post.title}</h1>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <img src={post.image} alt="" className="post-details-img" />
          <div className="post-author">
            By: {post.author ? post.author : "Admin"}
          </div>
          <p className="post-details-body">{post.body}</p>
        </article>
      )}
    </>
  );
};

export default PostDetails;
