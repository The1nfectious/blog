import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Ali Çağlar Alhan @CagsLhn",
      message: "This is my first react project",
      timestamp: new Date(),
    },
    {
      username: "Lewis Hamilton @LH44",
      message: "Great Team with Amazing Fans",
      timestamp: new Date(),
    },
    {
      username: "Galatasaray @galatasaray",
      message: "IIIIICAAAARRRRDIIIII",
      timestamp: new Date(),
    },
    {
      username: "Ali Çağlar Alhan @CagsLhn",
      message: "Fullstack Developer is my goal and one day i will be...",
      timestamp: new Date(),
    },
  ]);
  return (
    <div>
      <Navbar />
      <h1>Have a nice days:) </h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
