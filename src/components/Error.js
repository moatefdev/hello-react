import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default Error;
