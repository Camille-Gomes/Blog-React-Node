import React from "react";
import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    width="200px"
                    src="https://rencontres-tourisme-culturel.fr/wp-content/uploads/2020/02/featured_79.jpg"
                    alt=""
                ></img>
                <p>
                    lorem ipsum dolor sit amet, consectetur adip lorem lorem
                    ipsum dolor sit am lorem lorem ipsum dolor sit amet,
                    consectetur adip lorem lorem ipsum dolor sit am loremlorem
                    ipsum dolor sit amet, consectetur adip lorem lorem ipsum
                    dolor sit am lorem
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Cinéma</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
