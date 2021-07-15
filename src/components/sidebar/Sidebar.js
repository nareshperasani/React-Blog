import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" className="sidebarImg" />
        <p className="sidebarPara">
        Names are random, constructed from real first and last names. Company names are real, but are randomized along with street addresses and do not represent actual locations.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORY</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="fab sidebarIcon fa-facebook-square"></i>
          <i className="fab sidebarIcon fa-twitter-square"></i>
          <i className="fab sidebarIcon fa-pinterest-square"></i>
          <i className="fab sidebarIcon fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
