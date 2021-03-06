import React from "react";
import HeartIcon from "../Images/HeartIcon";
import { history } from "../../_helpers";

const ListingCard = ({ listing, rememberPost }) => {
  return (
    <div
      onClick={() => history.push("/listings/" + listing.id)}
      className="row no-gutters border h-100"
      style={{ borderRadius: "15px", overflow: "hidden" }}
    >
      <div className="col-12 d-flex flex-column">
        <div className="position-relative overflow-hidden listing-image row no-gutters flex-grow-0">
          <div
            className="listing-image-holder"
            style={{
              width: "100%",
              paddingTop: "70%",
              backgroundImage: `url(${listing.images.split("|")[0]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div className="row no-gutters px-3 pt-3 align-items-center flex-grow-0">
          <div
            className="col-auto mr-2 square-30 rounded-circle d-flex flex-center text-theme"
            style={{ background: "#E6EDFF" }}
          >
            <div>{listing.account.firstName.charAt(0)}</div>
          </div>
          <div className="col-auto">{listing.account.firstName}</div>
        </div>
        <div className="row no-gutters flex-grow-1">
          <div className="col-12 p-3">
            {listing.title}
            <div className="d-flex pt-2 text-muted">
              <div className="mr-2">Atlikimo laikas: </div>
              <div>{listing.deliveryTime} dienos</div>
            </div>
          </div>
        </div>
        <div className="row no-gutters flex-grow-0">
          <div className="col-12 p-3" style={{ background: "#E5EDFF" }}>
            <div className="row no-gutters justify-content-between">
              <div className="col-auto">
                <div
                  className="row no-gutters align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    rememberPost(listing.id);
                  }}
                >
                  <div className="col-auto mr-2">
                    <HeartIcon size={18}></HeartIcon>
                  </div>
                  <div>Įsiminti</div>
                </div>
              </div>
              <div className="col-auto" style={{ fontSize: "16px" }}>
                {listing.price}$
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
