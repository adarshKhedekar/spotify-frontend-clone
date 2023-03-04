import React from "react";
import "./Sidebar.css";
import logo from "./logo.png";
import SidebarOptions from "./SidebarOptions";
import { AiOutlineHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";


function Sidebar() {
    const playlist = ['Hip Hop/Rap', 'Rock', 'Pop', 'Country', 'Classical', 'Jazz', 'Electronic/Dance', 'R&B/Soul', 'Reggae', 'Indie'];
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>

      <SidebarOptions title="Home" Icon={AiOutlineHome} />
      <SidebarOptions title="Search" Icon={CiSearch} />
      <SidebarOptions title="Your Library" Icon={BiLibrary} />

      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />
      {playlist?.map(item => {
        return <SidebarOptions title={item} />
      })}
    </div>
  );
}

export default Sidebar;
