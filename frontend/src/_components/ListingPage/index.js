import React, { useState, useEffect } from "react";
import listings from "../../data/listings";
import ChatIcon from "./images/Chat";
import TimeIcon from "./images/DeliveryTime";
import RevsionsIcon from "./images/Revisions";
import ArrowBackIcon from "./images/ArrowBack";
import {history} from "../../_helpers"
const Listing = (props) => {
  const id = props.match.params.id;
  const [listing, setListing] = useState({});

  useEffect(() => {
    let foundListing = listings.find((x) => x.id === +id);
    setListing(foundListing);
  }, [id]);

  return Object.keys(listing).length ? (
    <div className="container-fluid main p-4 mx-auto" style={{ maxWidth: "1400px" }}>
      <div
        className="p-4 d-flex align-items-center cursor-pointer"
        onClick={() => history.push("/listings")}
      >
        <div className="d-flex mr-2">
          <ArrowBackIcon></ArrowBackIcon>
        </div>
        <div>Grįžti atgal</div>
      </div>
      <div className="row no-gutters font-weight-bold px-4" style={{ fontSize: "34px" }}>
        {listing.title}
      </div>
      <div
        className="row no-gutters px-4 mb-4 text-theme cursor-pointer"
        onClick={() => History.push("/listings")}
      >
        {listing.category}
      </div>
      <div className="row no-gutters">
        <div className="col-lg-7 col-12 px-4">
          <div
            className="row no-gutters"
            style={{
              borderRadius: "19px",
              paddingTop: "70%",
              backgroundImage: `url(${listing.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="row no-gutters py-3">
            <div className="col-lg-2 col-3 pr-3">
              <div
                className="col-image"
                style={{
                  borderRadius: "8px",
                  backgroundImage: `url(${listing.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-3 pr-3">
              <div
                className="col-image"
                style={{
                  borderRadius: "8px",
                  backgroundImage: `url(${listing.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="col-lg-2 col-3 pr-3">
              <div
                className="col-image"
                style={{
                  borderRadius: "8px",
                  backgroundImage: `url(${listing.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 px-4" style={{ fontSize: "16px" }}>
          <div className="font-weight-bold mb-2">Pardavėjas</div>
          <div className="row no-gutters mb-4 align-items-center">
            <div
              className="col-auto mr-2 square-35 rounded-circle"
              style={{
                backgroundImage: `url(${listing.author.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-auto">{listing.author.name}</div>
          </div>
          <div className="font-weight-bold mb-2">Aprašymas</div>
          <div className="mb-4">{listing.description}</div>
          <div className="row no-gutters align-items-center mb-3" style={{ fontWeight: "600" }}>
            <div className="d-flex align-items-center col-auto mr-4 pb-2">
              <div className="d-flex mr-2">
                <TimeIcon></TimeIcon>
              </div>
              <div>{listing.deliveryTime} dienų atlikimo laikas</div>
            </div>
            <div className="d-flex align-items-center col-auto pb-2">
              <div className="mr-2 d-flex">
                <RevsionsIcon></RevsionsIcon>
              </div>
              <div>{listing.revisions} Pataisymai</div>
            </div>
          </div>
          <div className="mb-3">
            <strong className="mr-3">Kaina</strong>
            <div className="font-weight-bold" style={{ fontSize: "40px" }}>
              {listing.price} $
            </div>
          </div>

          <div
            className="pl-4 pr-2 py-2 d-inline-flex justify-content-between bg-theme align-items-center text-white"
            style={{ borderRadius: "13px" }}
          >
            <div className="col-auto mr-3">Susisiekti</div>
            <div
              className="col-auto square-35 d-flex flex-center"
              style={{ background: `rgba(255,255,255,0.2)`, borderRadius: "8px" }}
            >
              <div>
                <ChatIcon></ChatIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Listing;
