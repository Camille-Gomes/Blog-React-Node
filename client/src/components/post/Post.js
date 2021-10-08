import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const post = ({ post }) => {
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={post.photo} alt=""></img>
            )}

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span key={c.id} className="postCat">
                            {c.name}
                        </span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>

                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDescription">{post.desc}</p>
        </div>
    );
};

export default post;
