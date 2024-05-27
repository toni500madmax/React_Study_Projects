import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import instance from "../axios/Instance";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await instance.get("/posts");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando posts...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
