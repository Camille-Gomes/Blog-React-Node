import React from "react";
import "./Post.css";

const post = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://mediaguinee.org/wp-content/uploads/2020/09/tokyo.jpg"
                alt=""
            ></img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour</span>
            </div>
            <p className="postDescription">
                lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum
                dolor sit am lorem lorem ipsum dolor sit amet, consectetur adip
                lorem lorem ipsum dolor sit am loremlorem ipsum dolor sit amet,
                consectetur adip lorem lorem ipsum dolor sit am lorem lorem
                ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor
                sit am lorem lorem ipsum dolor sit amet, consectetur adip lorem
                lorem ipsum dolor sit am loremlorem ipsum dolor sit amet,
                consectetur adip lorem lorem ipsum dolor sit am lorem lorem
                ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor
                sit am lorem lorem ipsum dolor sit amet, consectetur adip lorem
                lorem ipsum dolor sit am loremlorem ipsum dolor sit amet,
                consectetur adip lorem lorem ipsum dolor sit am lorem
            </p>
        </div>
    );
};

export default post;
