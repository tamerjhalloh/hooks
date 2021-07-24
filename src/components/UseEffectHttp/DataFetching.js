import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  //https://jsonplaceholder.typicode.com/posts

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // return () => {
    //     cleanup
    // }
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
