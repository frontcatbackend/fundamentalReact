import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  //что бы не создавать для инпутов отдельные состояния
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(), //теперь нужно этот пост добавить в массив в App/
    };
    create(newPost);
    setPost({ title: "", body: "" }); //затираем инпуты
  };
  return (
    <form>
      <MyInput
        type="text"
        placeholder=" input title"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />

      <MyInput
        type="text"
        placeholder=" input description"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />

      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  );
};

export default PostForm;
