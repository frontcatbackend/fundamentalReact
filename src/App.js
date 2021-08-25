import React, { useRef, useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySeclect from "./components/UI/select/MySeclect";
import styles from "./styles/styles.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "The Terminator", body: "Shwarznegger, Michael Biehn" },
    { id: 2, title: "Rembo", body: "Stallone" },
    { id: 3, title: "The Green Elephant", body: "Epifancev" },
  ]); //массив постов



  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("it is working");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery) || post.body.toLowerCase().includes(searchQuery)    
    );
    
  }, [searchQuery, sortedPosts]);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
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
          onChange={event => setSearchQuery(event.target.value)}
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
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Movies List"
        />
      ) : (
        <div style={{ textAlign: "center" }}>There are Tickets</div>
      )}
    </div>
  );
}

export default App;
