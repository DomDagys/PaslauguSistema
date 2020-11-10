import React from "react";
import Logo from "../Logo";
import RightTopCorner from "./Images/RightTopCorner";
import Categories from "./Categories";
import InvitePoster from "./InvitePoster";
import Footer from "./Footer";

const LandingPage = () => {
  let antraste = ["Raskite", "Freelancerius", "Lietuvoje"];
  let themeColor = "#4865FF";
  let populiariosPaieskos = ["React js", "Web developer", "Data analyst"];
  return (
    <div
      className="container-fluid px-0 main mx-auto"
      style={{ minHeight: "100vh", overflowX: "hidden" }}
    >
      <div
        className="row no-gutters position-relative px-5 py-4 align-items-center mx-auto mb-5 pb-5"
        style={{ maxWidth: "1400px" }}
      >
        <div
          className="position-absolute col-12"
          style={{ top: 0, left: 0, zIndex: 1 }}
        >
          <div className="row no-gutters">
            <div className="col-12 col-md-11 col-lg-10 mx-auto">
              <div className="d-flex justify-content-end">
                <div
                  className="d-block d-xl-none"
                  style={{ marginRight: "-100px", width: "500px" }}
                >
                  <RightTopCorner></RightTopCorner>
                </div>
                <div
                  className="d-none d-xl-block"
                  style={{ marginRight: "-180px", width: "650px" }}
                >
                  <RightTopCorner></RightTopCorner>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative col-12 px-3" style={{ zIndex: 5 }}>
          <div className="row no-gutters justify-content-between mb-5">
            <div className="col-auto">
              <Logo></Logo>
            </div>
            <div className="col-auto">
              <div className="row no-gutters text-white">
                <div className="col-auto mr-5">Tapti freelanceriu</div>
                <div className="col-auto">Prisijungti</div>
              </div>
            </div>
          </div>
          <div className="row no-gutters mb-5">
            <div className="col-6">
              <div
                className="row no-gutters font-weight-bold"
                style={{ fontSize: "50px" }}
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
            <div className="col-6">
              <div className="row no-gutters align-items-center">
                <input
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
                  className="col-auto px-5 py-3 text-white"
                  style={{
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
            className="row no-gutters align-items-center mb-5 pb-5"
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
          <Categories themeColor={themeColor}></Categories>
        </div>
      </div>
      <InvitePoster></InvitePoster>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
