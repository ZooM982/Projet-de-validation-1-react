import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList2() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="corps">
        <div className="left">
          <h2>Voir tous les post</h2>
          {posts.map((post) => (
            <div key={post.id}>
              <p>Title: {post.title}</p>
              <button onClick={() => handleSelectPost(post)}>
                Voir les détails
              </button>
            </div>
          ))}
        </div>
        {selectedPost && (
          <div className="right">
            <h2>Voir les details du post selectionné</h2>
            <h2>Title: {selectedPost.title}</h2>
            <p>Body: {selectedPost.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostList2;
