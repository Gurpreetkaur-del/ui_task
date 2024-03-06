import React from "react";
import ProfileMenu from "../ProfileMenu";

const Header = () => {
  return (
    <>
      <div className="wrapper-header">
        <div className="wrap-header">
            <h2 className="heading20">September, 21</h2>
            <div className="wrapper-hearder-right-item">
              <div className="user-profile-status">
                <h6 className="profile-name">Alison</h6>
                <p className="user-mail">alison@gmail.com</p>
              </div>
          <ProfileMenu />
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;