import React from "react";
import {List, ListItem} from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {


  return (
    <Box className="wrapper-sidebar">

      <div className="brand-logo">
        <img src={''} alt="" />
        DGL
      </div>
      <div className="search-bx">
        <div className="input-group">
          <img src="../assets/images/search-icon.svg" />
            <input className="form-control" placeholder="search" />
        </div>
      </div>
      <List className="">
        <ListItem
        >
          <Link
          className="item-link">
            <span>Home</span>
          </Link>
        </ListItem>

        <ListItem
        >
          <Link className="item-link">
            {/* <Group /> */}
            <span>Task</span>
          </Link>

        </ListItem>
        <ListItem
        >
          <Link className="item-link">
            {/* <Folder /> */}
            <span> Team</span>
          </Link>
        </ListItem>

        <ListItem
        >
          <Link className="item-link">
            {/* <Event /> */}
            <span>Documents</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link className="item-link">
            {/* <Payment /> */}
            <span>Project</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link className="item-link">
            
            <span>Calendar</span>
          </Link>
        </ListItem>
      </List>
      <button className="btn-setting">Setting</button>
    </Box>
  );
}
export default Sidebar;
