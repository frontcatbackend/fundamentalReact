import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import styles from "./styles/styles.css";

function App() {
  const [posts2, setPosts2] = useState([
    { id: 1, title: "Pyton", body: "Python is .." },
    { id: 2, title: "Java", body: "Java is .." },
    { id: 3, title: "C#", body: "C# is .." },
  ]);  //массив постов

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
 
  const addNewPost = (event) => {
    event.preventDefault();
      const newPost = {
        id: Date.now(),
        title,
        body
      } //объект постов

      setPosts2([...posts2, newPost])//добавляем созданный объект в массив постов
      setTitle('') //обнуляем инпуты
      setBody('') 
    console.log(title)
    console.log(body)
    console.log(newPost)
  }
  return (
    <div className="App">
      <form>
       <MyInput
         type ="text"
         placeholder=" input title"
         value={title}
         onChange={event => setTitle(event.target.value)}
       />

       <MyInput
         type ="text"
         placeholder=" input description"
         value={body}
         onChange={event => setBody(event.target.value)}
       />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts2} title="POST LIST 1" />
    </div>
  );
}

export default App;
