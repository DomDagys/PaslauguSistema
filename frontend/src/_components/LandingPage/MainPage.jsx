import React, { useState } from "react";
import Logo from "../Logo";
import RightTopCorner from "../Images/RightTopCorner";
import { history } from "../../_helpers";

const MainPage = ({ user }) => {
  let antraste = ["Raskite", "Freelancerius", "Lietuvoje"];
  let themeColor = "#4865FF";
  let populiariosPaieskos = ["React js", "Web developer", "Data analyst"];
  const [paieska, setPaieska] = useState("");
  return (
    <div
      className="row no-gutters position-relative px-md-5 px-3 py-4 align-items-center mx-auto"
      style={{ maxWidth: "1400px" }}
    >
      <div
        className="position-absolute col-12 d-none d-md-block"
        style={{ top: 0, left: 0, zIndex: 1 }}
      >
        <div className="row no-gutters">
          <div className="col-12 col-md-11 col-lg-10 mx-auto">
            <div className="d-flex justify-content-end">
              <div className="d-block d-xl-none" style={{ marginRight: "-100px", width: "500px" }}>
                <RightTopCorner></RightTopCorner>
              </div>
              <div className="d-none d-xl-block" style={{ marginRight: "-180px", width: "650px" }}>
                <RightTopCorner></RightTopCorner>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative col-12 px-md-3" style={{ zIndex: 5 }}>
        <div className="row no-gutters justify-content-between mb-5">
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
        <div className="row no-gutters mb-5 pt-3">
          <div className="col-6">
            <div
              className="row no-gutters d-none d-md-flex"
              style={{ fontSize: "50px", fontWeight: 800, lineHeight: "126%" }}
            >
              {antraste.map((x, i) => (
                <div className="col-12" key={`antrastes-eilute-${i}`}>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row no-gutters mb-4">
          <div className="col-12 col-md-8 col-lg-7 col-xl-6">
            <div className="row no-gutters align-items-center d-none d-md-flex">
              <input
                value={paieska}
                onChange={(e) => {
                  setPaieska(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    history.push("/listings/search/" + paieska);
                  }
                }}
                type="text"
                className="col py-3 px-3"
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
                }}
                className="col-auto px-5 py-3 text-white"
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
        </div>
        <div
          className="row no-gutters align-items-center mb-5 pb-5 d-flex d-md-none"
          style={{ fontWeight: "600", fontSize: "11px" }}
        >
          {populiariosPaieskos.map((x, i) => (
            <div
              key={`populiari-paieska-${i}`}
              className="col-auto mr-2 py-2 bg-theme text-white px-2"
              style={{
                borderRadius: "25px",
              }}
            >
              {x}
            </div>
          ))}
        </div>
        <div
          className="row no-gutters align-items-center mb-5 pb-5 d-none d-md-flex"
          style={{ fontWeight: "600" }}
        >
          <div className="col-auto mr-4">Populiaru:</div>
          {populiariosPaieskos.map((x, i) => (
            <div
              key={`populiari-paieska-${i}`}
              className="col-auto mr-3 px-3 py-2"
              style={{
                border: "4px solid" + themeColor,
                borderRadius: "11px",
                fontSize: "14px",
              }}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
