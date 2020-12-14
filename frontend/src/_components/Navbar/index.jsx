import React from "react";
import Logo from "../Logo";
import Menu from "../Images/Menu";
import { accountService } from "@/_services";

const Navbar = () => {
  const user = accountService.userValue;
  return (
    <React.Fragment>
      <div
        className="row no-gutters justify-content-between align-items-center px-md-4 px-3 py-4 mx-auto d-none d-md-flex"
        style={{ maxWidth: "1250px" }}
      >
        <div className="col-auto" style={{ width: "300px" }}>
          <Logo></Logo>
        </div>
        <div className="col-auto">
          {user ? (
            <div
              className="square-40 rounded-circle text-theme d-flex flex-center"
              style={{
                background: "#E5EDFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {user.firstName.charAt(0)}
            </div>
          ) : (
            <div className="row no-gutters text-white">
              <a className="col-auto mr-5" href="/account/register">
                Tapti freelanceriu
              </a>
              <a className="col-auto" href="/account/login">
                Prisijungti
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="row no-gutters justify-content-between p-4 align-items-center d-flex d-md-none">
        <div className="col-auto" style={{ width: "60px" }}>
          <Menu></Menu>
        </div>
        <div className="col-auto" style={{ width: "150px" }}>
          <Logo></Logo>
        </div>
        <a className="col-auto" href="/account/login">
          Prisijungti
        </a>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
