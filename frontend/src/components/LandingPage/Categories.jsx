import React from "react";
import VideIcon from "./Images/Video";
import GraphicDesignIcon from "./Images/GraphicDesign";
import MarketingIcon from "./Images/Marketing";
import ProgrammingIcon from "./Images/Programming";
import { Link } from "react-router-dom";
import {history} from "../../_helpers";

const MobileCategory = ({ x }) => {
  return (
    <div className="col-12 col-md-6 p-3 d-block d-lg-none">
      <div
        onClick={() => History.push("/listings")}
        className="p-4 category-card row no-gutters justify-content-between align-items-center"
        style={{
          height: "100%",
          borderRadius: "35px",
        }}
      >
        <div
          className="p-3 col-auto"
          style={{
            background: "#293A91",
            borderRadius: "27px",
            height: "90px",
            width: "90px",
          }}
        >
          <x.icon height={"100%"} width={"auto"}></x.icon>
        </div>
        <div
          style={{ height: "100px", fontWeight: "500", fontSize: "18px" }}
          className="d-flex align-items-center justify-content-center text-white text-center col"
        >
          <div className="d-block d-sm-none d-md-block">
            {x.name.split(" ").map((x, i) => (
              <div key={`name-row-${i}`}>{x}</div>
            ))}
          </div>
          <div className="d-none d-sm-block d-md-none">{x.name}</div>
        </div>
      </div>
    </div>
  );
};

const Categories = ({ themeColor }) => {
  let categories = [
    { name: "Grafinis Dizainas", icon: GraphicDesignIcon },
    { name: "Programų Kūrimas", icon: ProgrammingIcon },
    { name: "Skaitmeninis Marketingas", icon: MarketingIcon },
    { name: "Video, Animacijos", icon: VideIcon },
  ];
  return (
    <div
      className="row no-gutters mx-auto mb-5 pb-5"
      style={{ maxWidth: "1100px" }}
    >
      <div
        className="col-12 mb-5 text-center font-weight-bold"
        style={{ fontSize: "36px" }}
      >
        Kategorijos
      </div>
      {categories.map((x, i) => (
        <React.Fragment>
          <MobileCategory x={x}></MobileCategory>
          <div
            key={`category-${i}`}
            className="col-3 p-lg-3 p-xl-4 d-none d-lg-block"
          >
            <div
              onClick={() => History.push("/listings")}
              className="p-4 category-card"
              style={{
                height: "100%",
                borderRadius: "35px",
              }}
            >
              <div
                className="p-4"
                style={{
                  background: "#293A91",
                  borderRadius: "27px",
                  height: "150px",
                }}
              >
                <x.icon height={"100%"} width={"auto"}></x.icon>
              </div>
              <div
                style={{
                  height: "120px",
                  fontWeight: "500",
                  fontSize: "22px",
                }}
                className="d-flex align-items-center justify-content-center text-white text-center"
              >
                <div>
                  {x.name.split(" ").map((x, i) => (
                    <div key={`name-row-${i}`}>{x}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Categories;
