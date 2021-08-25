import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySeclect from "./components/UI/select/MySeclect";
import styles from "./styles/styles.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "бб", body: "аа" },
    { id: 2, title: "аа", body: "бб" },
    { id: 3, title: "мм", body: "вв" },
  ]); //массив постов

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    console.log(sort);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px" }} />
      <div>
        <MyInput 
        placeholder="Search . ." 
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.va)}
        />
        <MySeclect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting By .."
          options={[
            {
              value: "title",
              name: "By name",
            },
            {
              value: "body",
              name: "By description",
            },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="POST LIST 1" />
      ) : (
        <div style={{ textAlign: "center" }}>There is No POSTS</div>
      )}
    </div>
  );
}

export default App;
