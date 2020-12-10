import React from "react";
import HeartIcon from "../Images/HeartIcon";
import {history} from "../../_helpers";

const ListingCard = ({ listing }) => {
  return (
    <div
      onClick={() => history.push("/listings/" + listing.id)}
      className="row no-gutters border h-100"
      style={{ borderRadius: "15px", overflow: "hidden", fontSize: "14px" }}
    >
      <div
        className="col-6"
        style={{
          paddingTop: "40%",
          backgroundImage: `url(${listing.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="col-6 d-flex flex-column">
        <div className="row no-gutters px-2 pt-3 align-items-center flex-grow-0">
          <div
            className="col-auto mr-2 square-30 rounded-circle"
            style={{
              backgroundImage: `url(${listing.author.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="col-auto">{listing.author.name}</div>
        </div>
        <div className="row no-gutters flex-grow-1">
          <div className="col-12 p-2">
            {listing.title}
            <div className="pt-2">
              <div className="text-muted">Atlikimo laikas: </div>
              <div>{listing.deliveryTime} dienos</div>
            </div>
          </div>
        </div>
        <div className="row no-gutters flex-grow-0">
          <div className="col-12 p-2" style={{ background: "#E0E0E0" }}>
            <div className="row no-gutters justify-content-between align-items-center">
              <div className="col-auto">
                <div className="row no-gutters align-items-center">
                  <div className="col-auto mr-2">
                    <HeartIcon size={14}></HeartIcon>
                  </div>
                  <div>Įsiminti</div>
                </div>
              </div>
              <div className="col-auto">{listing.price}$</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
