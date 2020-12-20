import React from "react";
import Logo from "../Logo";
import Menu from "../Images/Menu";
import { accountService } from "@/_services";
import "./index.css";
import { history } from "../../_helpers";

const Navbar = () => {
  const user = accountService.userValue;
  const [showMenu, setShowMenu] = React.useState(false);
  const [paieska, setPaieska] = React.useState("");
  let themeColor = "#4865FF";
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
          {" "}
          <div className="row no-gutters align-items-center d-none d-md-flex">
            <input
              value={paieska}
              onChange={(e) => {
                setPaieska(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  history.push("/listings/search/" + paieska);
                  history.go(0);
                }
              }}
              type="text"
              className="col py-2 px-3"
              style={{
                fontWeight: "600",
                fontSize: "18px",
                outline: "none",
                border: "9px solid " + themeColor,
                borderRadius: "28px 0 0 28px",
              }}
            ></input>
            <div
              onClick={() => {
                history.push("/listings/search/" + paieska);
                history.go(0);
              }}
              className="col-auto px-5 py-2 text-white"
              style={{
                cursor: "pointer",
                background: themeColor,
                border: "9px solid " + themeColor,
                borderRadius: "0 28px 28px 0",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Ieškoti
            </div>
          </div>
        </div>
        <div className="col-auto position-relative">
          {user ? (
            <React.Fragment>
              {showMenu ? (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: 0,
                    zIndex: "100",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="p-3 menuitem text-nowrap border"
                    onClick={() => {
                      history.push("/remembered-posts");
                    }}
                  >
                    Įsiminti skelbimai
                  </div>
                  <div className="p-3 menuitem text-nowrap border" onClick={accountService.logout}>
                    Atsijungti
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                onClick={() => setShowMenu(!showMenu)}
                className="square-40 rounded-circle text-theme d-flex flex-center"
                style={{
                  background: "#E5EDFF",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                {user.firstName.charAt(0)}
              </div>
            </React.Fragment>
          ) : (
            <div className="row no-gutters">
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
