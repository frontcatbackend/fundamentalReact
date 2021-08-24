import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import styles from "./styles/styles.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Pyton", body: "Python is .." },
    { id: 2, title: "Java", body: "Java is .." },
    { id: 3, title: "C#", body: "C# is .." },
  ]); //массив постов

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="POST LIST 1" />
    </div>
  );
}

export default App;
