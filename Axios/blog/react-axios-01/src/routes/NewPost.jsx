import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import instance from "../axios/Instance";

export default function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = async (e) => {
    e.preventDefault();
    const response = await instance.get("/posts");
    const data = response.data;
    const post = {
      userId: data[data.length - 1].userId + 1,
      id: data[data.length - 1].id + 1,
      title: title,
      body: body,
    };

    await instance.post("/posts", {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo post: </h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título: </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo: </label>
          <textarea
            name="body"
            id="body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar post" className="btn" />
      </form>
    </div>
  );
}
