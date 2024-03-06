import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Avatar, Box } from "@mui/material";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
      id="basic-button"
      className="user-drop-btn"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >
        <img src="../assets/images/user-img.png" alt="" className="img1" />
      </Button>

      <Menu
      className="menu-popup"
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}>
        <MenuItem>
          Profile
        </MenuItem>
        <MenuItem>
          Settings
        </MenuItem>
        <MenuItem>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
