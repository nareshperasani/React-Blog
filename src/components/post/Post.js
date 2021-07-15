import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Sampling theory is a study.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Sampling theory is a study of relationships existing between a
        population and samples drawn from the population. Sampling theory is
        applicable only to random samples.
        Sampling theory is a study of relationships existing between a
        population and samples drawn from the population. Sampling theory is
        applicable only to random samples.
        Sampling theory is a study of relationships existing between a
        population and samples drawn from the population. Sampling theory is
        applicable only to random samples.
        Sampling theory is a study of relationships existing between a
        population and samples drawn from the population. Sampling theory is
        applicable only to random samples.
        Sampling theory is a study of relationships existing between a
        population and samples drawn from the population. Sampling theory is
        applicable only to random samples.
      </p>
    </div>
  );
}

export default Post;
