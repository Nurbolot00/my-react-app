
import { useState } from 'react';
import PostList from './components/postList/PostList';
import './App.css';
import PostForm from './components/postForm/PostForm';


const DUNNY_POSTS = [
  {
    id: 1,
    title: "Saha",
    body: "Description"
  },
  {
    id: 2,
    title: "Joha",
    body: "Description"
  },
  {
    id: 3,
    title: "Baha",
    body: "Description"
  },
  {
    id: 4,
    title: "Beka",
    body: "Description"
  }
]

function App() {
  const [posts,setPosts] = useState(DUNNY_POSTS)

  const addPostHandler = (newPost)=>{
    console.log(newPost);
    const updatedExpenses = [...posts]
    updatedExpenses.push(newPost)
    setPosts(updatedExpenses)

  }
  return (
    <div className="App">
      <PostForm onPost={addPostHandler}/>
      <PostList posts={posts}/>
      
      
      
    </div>
  );
}

export default App;
