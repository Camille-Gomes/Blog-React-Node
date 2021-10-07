import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Travel & Food</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://s30876.pcdn.co/wp-content/uploads/Japan.jpg.optimal.jpg"
                alt=""
            ></img>
        </div>
    );
};

export default Header;
