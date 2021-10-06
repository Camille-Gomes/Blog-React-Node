import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./Settings.css";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update your account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete your account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img
                            src="https://blog.europ-assistance.be/wp-content/uploads/2019/01/japan-tokyo.jpeg"
                            alt=""
                        ></img>
                        <label htmlFor="fileInput">
                            <i className="settingsProfilePictureIcon far fa-user-circle"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        ></input>
                    </div>
                    <label>Usurname</label>
                    <input type="text" placeholder="Safak"></input>
                    <label>Email</label>
                    <input type="email" placeholder="Safak@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    );
};

export default Settings;
