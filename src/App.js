import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import styles from "./styles/styles.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Pyton", body: "Python is .." },
    { id: 2, title: "Java", body: "Java is .." },
    { id: 3, title: "C#", body: "C# is .." },
  ]);  //массив постов

//что бы не создавать для инпутов отдельные состояния
const [post, setPost] = useState({title:'', body:''})


  const addNewPost = (event) => {
    event.preventDefault();
      setPosts([...posts, {...post, id: Date.now()}])//добавляем созданный объект в массив постов
      setPost({title: '', body: ''}) //затираем инпуты
  }
  return (
    <div className="App">
      <form>
       <MyInput
         type ="text"
         placeholder=" input title"
         value={post.title}
         onChange={event => setPost({...post, title: event.target.value })}
       />

       <MyInput
         type ="text"
         placeholder=" input description"
         value={post.body}
         onChange={event => setPost({...post, body: event.target.value })}
       />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title="POST LIST 1" />
    </div>
  );
}

export default App;
