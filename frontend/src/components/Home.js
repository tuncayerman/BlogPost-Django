import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to Blog Lyfe</h1>
        <p className="lead">
          The standard Lorem Ipsum passage, used since the 1500s
        </p>
        <hr className="my-4" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link className="btn btn-primary btn-lg" to="/blog" role="button">
          Check My Blog
        </Link>
      </div>
    </div>
  );
};
export default Home;
