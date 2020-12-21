import React, { useState, useEffect } from "react";
import listings from "../../data/listings";
import ChatIcon from "./images/Chat";
import TimeIcon from "./images/DeliveryTime";
import RevsionsIcon from "./images/Revisions";
import ArrowBackIcon from "./images/ArrowBack";
import { history } from "../../_helpers";
import {
  postService,
  accountService,
  alertService,
  suspensionService,
  reportService,
} from "@/_services";
import Navbar from "../Navbar";
import Flag from "./images/Flag";
import HeartIcon from "../Images/HeartIcon";
import { elementAt } from "rxjs/operators";

const Listing = (props) => {
  const user = accountService.userValue;
  const id = props.match.params.id;
  const [listing, setListing] = useState({});
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    postService.getPostById(id).then((res) => {
      if (res.success) {
        setListing(res.data);
      }
    });
  }, [id]);

  const rememberPost = () => {
    if (user) {
      postService.rememberPost(id, user.id).then((res) => {
        if (res.success) {
          alertService.success("Skelbimas sėkmingai įsimintas");
        } else {
          alertService.error("Skelbimo įsiminti nepavyko");
        }
      });
    } else {
      alertService.error("Norėdami įsiminti skelbimą, prisijunkite");
    }
  };

  const reportUser = () => {
    if (user && Object.keys(listing).length) {
      var category = prompt("Kokia paskundimo priežastis?");
      reportService.reportUser(listing.account.id, category).then((res) => {
        if (res.success) {
          alertService.success("Vartotojas sėkmingai paskųstas");
        } else {
          alertService.error("Kažkas nepavyko");
        }
      });
    } else {
      alertService.error("Prisijunkite ir pabandykite iš naujo");
    }
  };

  const reportPost = () => {
    if (user && Object.keys(listing).length) {
      var category = prompt("Kokia paskundimo priežastis?");
      reportService.reportPost(listing.id, category).then((res) => {
        if (res.success) {
          alertService.success("Skelbimas sėkmingai paskųstas");
        } else {
          alertService.error("Kažkas nepavyko");
        }
      });
    } else {
      alertService.error("Prisijunkite ir pabandykite iš naujo");
    }
  };

  return Object.keys(listing).length ? (
    <div className="container-fluid main px-0 pb-5">
      <Navbar></Navbar>
      <div className="row no-gutters mx-auto" style={{ maxWidth: "1250px" }}>
        <div className="col-12">
          <div className="row no-gutters justify-content-between align-items-center">
            <div
              className="p-4 d-flex align-items-center cursor-pointer col-auto"
              onClick={() => history.go(-1)}
            >
              <div className="d-flex mr-2">
                <ArrowBackIcon></ArrowBackIcon>
              </div>
              <div>Grįžti atgal</div>
            </div>
            <div className="col-auto d-flex aling-items-center p-3">
              <div
                onClick={reportUser}
                className="mr-3 d-flex align-items-center px-2 py-1"
                style={{ borderRadius: "7px", background: "#F1F1F1", cursor: "pointer" }}
              >
                <div className="mr-3">
                  <Flag></Flag>
                </div>
                <div>User</div>
              </div>
              <div
                onClick={reportPost}
                className="d-flex align-items-center px-2 py-1"
                style={{ borderRadius: "7px", background: "#F1F1F1", cursor: "pointer" }}
              >
                <div className="mr-3">
                  <Flag></Flag>
                </div>
                <div>Post</div>
              </div>
            </div>
          </div>

          <div className="row no-gutters font-weight-bold px-4" style={{ fontSize: "34px" }}>
            {listing.title}
          </div>
          <div
            className="row no-gutters px-4 mb-4 text-theme cursor-pointer"
            onClick={() => history.push("/listings/category/" + listing.category)}
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
                  backgroundImage: `url(${listing.images.split("|")[mainImage]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="row no-gutters py-3">
                {listing.images.split("|").map((x, i) => (
                  <div className="col-lg-2 col-3 pr-3" key={`lisiting-image-${i}`}>
                    <div
                      onClick={() => setMainImage(i)}
                      className="col-image"
                      style={{
                        borderRadius: "8px",
                        backgroundImage: `url(${x})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-12 px-4" style={{ fontSize: "16px" }}>
              <div className="font-weight-bold mb-2">Pardavėjas</div>
              <div className="row no-gutters mb-4 align-items-center">
                <div
                  className="col-auto mr-2 square-30 rounded-circle d-flex flex-center text-theme"
                  style={{ background: "#E6EDFF" }}
                >
                  <div>{listing.account.firstName.charAt(0)}</div>
                </div>
                <div className="col-auto">{listing.account.firstName}</div>
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
                className="pl-4 pr-2 py-2 mr-3 d-inline-flex justify-content-between bg-theme align-items-center text-white"
                style={{ borderRadius: "13px", cursor: "pointer" }}
              >
                <div className="col-auto mr-3">Susisiekti</div>
                <div className="col-auto square-35 d-flex flex-center">
                  <div>
                    <ChatIcon></ChatIcon>
                  </div>
                </div>
              </div>
              <div
                onClick={rememberPost}
                className="pl-4 pr-2 py-2 d-inline-flex justify-content-between align-items-center"
                style={{ borderRadius: "13px", background: "#E7E7E7", cursor: "pointer" }}
              >
                <div className="col-auto mr-3">Įsiminti</div>
                <div className="col-auto square-35 d-flex flex-center">
                  <div>
                    <HeartIcon></HeartIcon>
                  </div>
                </div>
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
