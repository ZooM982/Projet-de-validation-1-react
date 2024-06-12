import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="header">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {posts.map((post) => (
            <li key={post.id}>
              <p className="ID">User ID: {post.id}</p>
              <h3 className="title">Title: <span className="title-text"> {post.title}</span></h3>
              <h4 className="body">Body: <span className="body-text">{post.body}</span></h4>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default PostList;
