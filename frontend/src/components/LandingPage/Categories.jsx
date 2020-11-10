import React from "react";
import VideIcon from "./Images/Video";
import GraphicDesignIcon from "./Images/GraphicDesign";
import MarketingIcon from "./Images/Marketing";
import ProgrammingIcon from "./Images/Programming";

const Categories = ({ themeColor }) => {
  let categories = [
    { name: "Grafinis Dizainas", icon: GraphicDesignIcon },
    { name: "Programų Kūrimas", icon: ProgrammingIcon },
    { name: "Skaitmeninis Marketingas", icon: MarketingIcon },
    { name: "Video, Animacijos", icon: VideIcon },
  ];
  return (
    <div className="row no-gutters mx-auto" style={{ maxWidth: "1200px" }}>
      <div
        className="col-12 mb-5 text-center font-weight-bold"
        style={{ fontSize: "36px" }}
      >
        Kategorijos
      </div>
      {categories.map((x, i) => (
        <div key={`category-${i}`} className="col-3 p-4">
          <div
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
              style={{ height: "120px", fontWeight: "500", fontSize: "22px" }}
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
      ))}
    </div>
  );
};

export default Categories;
