import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header></Header>
            <div className="home">
                <Posts posts={posts}></Posts>
                <SideBar></SideBar>
            </div>
        </>
    );
};

export default Home;
