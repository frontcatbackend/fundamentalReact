import React, { useState, useMemo } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import styles from "./styles/styles.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "The Terminator", body: "Shwarznegger, Michael Biehn" },
    { id: 2, title: "Rembo", body: "Stallone" },
    { id: 3, title: "The Green Elephant", body: "Epifancev" },
  ]); 

const [filter, setFilter] = useState({sort:'', query:''}) //init

  const sortedPosts = useMemo(() => {
    console.log("it is working");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query) || post.body.toLowerCase().includes(filter.query)    
    );
    
  }, [filter.query, sortedPosts]);


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
     <PostFilter filter={filter} setFilter={setFilter} />
     
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Movies List"
        />
  
    </div>
  );
}

export default App;
