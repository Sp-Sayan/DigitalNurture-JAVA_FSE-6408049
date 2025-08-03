import React from "react";
import { blogs } from "../Blogs";

const BlogDetails = () => {
  const blogdata = (
    <ul>
      {blogs.map((item) => (
        <div key={item.id}>
          <h3>{item.bname}</h3>
          <h4>{item.author}</h4>
          <p>{item.post}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <div className="blog-details">
        <h1>Blog Details</h1>
        {blogdata}
      </div>
    </div>
  );
};

export default BlogDetails;
