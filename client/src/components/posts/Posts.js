import React from "react";
import "./Posts.css";
import Post from "../post/Post";

const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map((p) => (
                <Post post={p}></Post>
            ))}
        </div>
    );
};

export default Posts;
