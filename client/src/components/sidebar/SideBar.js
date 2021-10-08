import React from "react";
import "./SideBar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
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
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
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
