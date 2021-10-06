import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://mediaguinee.org/wp-content/uploads/2020/09/tokyo.jpg"
                    alt=""
                ></img>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet, consectetur
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Autor : <b>Safak</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">
                    Lorem ipsum dolor sit amet, consectetur adip lorem lorem
                    ipsum dolor sit am lorem lorem ipsum dolor sit amet,
                    consectetur adip lorem lorem ipsum dolor sit am loremlorem
                    ipsum dolor sit amet, consectetur adip lorem lorem ipsum
                    dolor sit am lorem lorem ipsum dolor sit amet, consectetur
                    adip lorem lorem ipsum dolor sit am lorem lorem ipsum dolor
                    sit amet, consectetur adip lorem lorem ipsum dolor sit am
                    loremlorem ipsum dolor sit amet, consectetur adip lorem
                    lorem ipsum dolor sit am lorem lorem ipsum dolor sit amet,
                    consectetur adip lorem lorem ipsum dolor sit am lorem lorem
                    ipsum dolor sit amet, consectetur adip lorem lorem ipsum
                    dolor sit am loremlorem ipsum dolor sit amet, consectetur
                    adip lorem lorem ipsum dolor sit am lorem
                </p>
            </div>
        </div>
    );
};

export default SinglePost;
