import React from "react";
import Logo from "../Logo";
import CornerMobile from "./Images/CornerMobile";
import Menu from "./Images/Menu";

const MainPage = () => {
  let antraste = ["Raskite", "Freelancerius", "Lietuvoje"];
  let themeColor = "#4865FF";
  let populiariosPaieskos = ["React js", "Web developer", "Data analyst"];
  return (
    <div className="row no-gutters mb-5">
      <div className="col-12">
        <div className="row no-gutters justify-content-between p-4 align-items-center">
          <div className="col-auto" style={{ width: "60px" }}>
            <Menu></Menu>
          </div>
          <div className="col-auto" style={{ width: "150px" }}>
            <Logo></Logo>
          </div>
          <div className="col-auto" style={{ fontSize: "12px" }}>
            Prisijungti
          </div>
        </div>
      </div>
      <div className="col-12 bg-theme px-3 pt-3 pb-5">
        <div
          className="row no-gutters justify-content-end align-items-end flex-nowrap position-relative mx-auto mb-4"
          style={{ maxWidth: "380px" }}
        >
          <div
            className="col-auto text-white"
            style={{
              fontSize: "28px",
              fontWeight: "600",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <div>Raskite</div>
            <div>Freelancerius</div>
            <div>Lietuvoje</div>
          </div>
          <div
            className="col-auto p-4"
            style={{
              maxWidth: "230px",
            }}
          >
            <CornerMobile></CornerMobile>
          </div>
        </div>
        <div
          className="row no-gutters position-relative justify-content-center mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="col-12 mx-2 my-1">
            <input
              type="text"
              className="w-100 px-4 py-3"
              style={{ borderRadius: "18px", outline: "none", border: "none" }}
            ></input>
          </div>
          <div
            className="col-12 bg-theme-darker mx-2 px-4 py-3 my-1 text-white text-center"
            style={{ borderRadius: "18px" }}
          >
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
