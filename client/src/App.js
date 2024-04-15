import "./App.css";
import PostList from "./pages/post/PostList.jsx";
import Post from "./pages/post/index.jsx";
function App() {
  return (
    <div className="container">
      <h1>Create a Post</h1>
      <Post></Post>
      <hr></hr>
      <h1>Posts</h1>
      <PostList></PostList>
    </div>
  );
}

export default App;
