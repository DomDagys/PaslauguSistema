import React, { useState, useEffect } from "react";
import SelectButton from "../Buttons/Select";
import { SizeMe } from "react-sizeme";
import SearchIcon from "../Images/SearchIcon";

const FiltersPanel = ({ setListings, listings, initialListings }) => {
  const maxPrices = [5, 20, 50, 100, 200, 1000, 2000];
  const categories = ["Grafinis dizainas", "Programavimas", "Marketingas", "Video ir animacijos"];
  const maxTimes = [1, 3, 7, 14, 30, 60];
  const sorts = ["Kaina", "Atlikimo laikas", "Populiarumas"];

  const [category, setCategory] = useState(-1);
  const [maxPrice, setMaxPrice] = useState(maxPrices.length - 1);
  const [maxTime, setMaxTime] = useState(maxTimes.length - 1);
  const [sortBy, setSortBy] = useState(sorts.length - 1);
  const [keywords, setKeywords] = useState("");
  const [panelExpanded, setPanelExapanded] = useState(false);

  useEffect(() => {
    let newListings = initialListings.filter(
      (x) =>
        x.price <= maxPrices[maxPrice] &&
        (category === -1 ||
          x.category.toLowerCase() === categories[category].toLowerCase() ||
          category === "Visos") &&
        x.deliveryTime <= maxTimes[maxTime] &&
        (!keywords || x.title.toLocaleLowerCase().includes(keywords.toLocaleLowerCase()))
    );
    setListings(newListings);
  }, [maxPrice, category, maxTime, keywords]);

  useEffect(() => {
    let newListings = [...listings];
    if (sortBy === 0) {
      newListings.sort((a, b) => (a.price < b.price ? -1 : a.price > b.price ? 1 : 0));
    } else if (sortBy === 1) {
      newListings.sort((a, b) =>
        a.deliveryTime < b.deliveryTime ? -1 : a.deliveryTime > b.deliveryTime ? 1 : 0
      );
    } else if (sortBy === 2) {
      newListings.sort((a, b) => (a.views < b.views ? -1 : a.views > b.views ? 1 : 0));
    }

    setListings(newListings);
  }, [sortBy]);

  return (
    <SizeMe>
      {({ size }) => (
        <React.Fragment>
          <div
            className="row no-gutters listings-filters position-relative mb-3"
            style={{
              overflow: size.width > 558 ? "visible" : "hidden",
              maxHeight: size.width > 558 || panelExpanded ? `500px` : "0px",
            }}
          >
            {/* <div className="col-12 col-sm-6 col-md-auto pr-sm-3 mb-2">
              <div className="mb-2">Kategorija</div>
              <SelectButton
                setSelected={setCategory}
                selected={category}
                items={["Grafinis dizainas", "Programavimas", "Marketingas", "Video ir animacijos"]}
              >
                {category === -1 ? "Pasirinkti" : categories[category]}
              </SelectButton>
            </div> */}
            <div className="col-12 col-sm-6 col-md-auto pr-md-3 mb-2">
              <div className="mb-2">Kaina</div>
              <SelectButton
                setSelected={setMaxPrice}
                selected={maxPrice}
                items={maxPrices.map((x) => "< " + x + "$")}
              >
                {"< " + maxPrices[maxPrice] + "$"}
              </SelectButton>
            </div>
            <div className="col-12 col-sm-6 col-md-auto pr-sm-3 mb-2">
              <div className="mb-2">Pristatymo laikas</div>
              <SelectButton
                selected={maxTime}
                setSelected={setMaxTime}
                items={maxTimes.map((x, i) => "< " + x + (i === 0 ? "diena" : "dienos"))}
              >
                {"< " +
                  maxTimes[maxTime] +
                  (maxTimes[maxTime] === 1
                    ? " diena"
                    : maxTimes[maxTime] < 10
                    ? " dienos"
                    : " dienų")}
              </SelectButton>
            </div>
            <div className="col-12 col-sm-6 col-md-auto pr-md-3 mb-2">
              <div className="mb-2">Rikiuoti pagal</div>
              <SelectButton
                selected={sortBy}
                setSelected={setSortBy}
                items={["Kaina", "Atlikimo laikas", "Populiarumas"]}
              >
                {sorts[sortBy]}
              </SelectButton>
            </div>
            <div className="col d-none d-sm-block">
              <div className="mb-2">Raktažodžiai</div>
              <div className="row no-gutters flex-nowrap">
                <div className="col">
                  <input
                    value={keywords}
                    onChange={(e) => {
                      e.persist();
                      setKeywords(e.target.value);
                    }}
                    type="text"
                    className="w-100 px-3"
                    style={{
                      border: "4px solid #4865ff",
                      borderRadius: "13px",
                      height: "46px",
                      outline: "none",
                    }}
                  ></input>
                </div>
                {/* <div
                  className="col-auto bg-theme px-5 text-white d-flex align-items-center"
                  style={{
                    borderRadius: "0 18px 18px 0",
                    fontSize: "14px",
                    height: "46px",
                  }}
                >
                  Ieškoti
                </div> */}
              </div>
            </div>
          </div>
          {size.width < 558 && (
            <div className="row no-gutters justify-conten-between pt-3 align-items-center">
              <div className="col position-relative pr-3">
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: "10px",
                    margin: "auto",
                  }}
                >
                  <SearchIcon></SearchIcon>
                </div>
                <input
                  type="text"
                  className="w-100 px-4 py-2"
                  style={{
                    borderRadius: "11px",
                    border: "none",
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 30px 0px",
                  }}
                ></input>
              </div>
              <div className="col-auto" onClick={() => setPanelExapanded(!panelExpanded)}>
                FILTRUOTI
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </SizeMe>
  );
};

export default FiltersPanel;
