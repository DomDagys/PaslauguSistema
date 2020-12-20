import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import ListingCardMobile from "./ListingCardMobile";
import Listings from "../../data/listings";
import Pagination from "./Pagination";
import { SizeMe } from "react-sizeme";
import FiltersPanel from "./FiltersPanel";

import { postService, accountService, alertService } from "@/_services";
import "./index.css";
import Categories from "./Categories";
import { history } from "../../_helpers";
import Navbar from "../Navbar";
import Zero from "../Images/Zero";

const ListingsPage = (props) => {
  const user = accountService.userValue;
  const filterKind = props.match.params.kind;
  let keyword = decodeURI(props.match.params.keyword);
  keyword = keyword === "undefined" ? "" : keyword;
  console.log("filter kind and keyw", filterKind, keyword);
  const [listings, setListings] = useState([]);
  const [initialListings, setInitialListings] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(filterKind === "category" ? keyword : "");

  useEffect(() => {
    if (filterKind === "category") {
      postService.getPostsByCategory(keyword).then((res) => {
        console.log("Response", res);
        if (res.success) {
          setListings(res.data);
          setInitialListings(res.data);
        }
      });
    } else {
      postService.getPostsBySearch(keyword).then((res) => {
        console.log("Response", res);
        if (res.success) {
          setInitialListings(res.data);
          setListings(res.data);
        }
      });
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const rememberPost = (id) => {
    if (user) {
      postService.rememberPost(id, user.id).then((res) => {
        console.log("response after remembering post", res);
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

  return (
    <SizeMe>
      {({ size }) => (
        <div className="container-fluid main px-0">
          <Navbar></Navbar>
          <div className="row no-gutters bg-theme">
            <div className="col-12">
              <div
                className="row no-gutters mx-auto px-3"
                style={{ fontSize: "16px", maxWidth: "1250px" }}
              >
                {Categories.map((x, i) => (
                  <div className="col-3 p-3" key={`category-${i}`}>
                    <div
                      onClick={() => {
                        history.push("/listings/category/" + x.dbaseName);
                        history.go(0);
                      }}
                      className={`cover-theme-0-10 bg-theme${
                        category === x.dbaseName ? "-darker" : ""
                      } px-3 py-2 d-flex h-100 align-items-center text-white justify-content-center`}
                      style={{ borderRadius: "16px", userSelect: "none", cursor: "pointer" }}
                    >
                      <div className="mr-lg-3" style={{ minWidth: "40px", maxWidth: "60px" }}>
                        <x.icon></x.icon>
                      </div>
                      <div className="d-none d-lg-block">{x.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <React.Fragment>
            <div
              className="py-5 my-3 font-weight-bold text-center d-none d-md-block mx-auto"
              style={{ fontSize: "50px", maxWidth: "1300px" }}
            >
              {category ? category : `"${keyword}"`}
            </div>
            <div
              className="py-4 font-weight-bold text-center d-block d-md-none mx-auto"
              style={{ fontSize: "30px", maxWidth: "1300px" }}
            >
              {category ? category : `"${keyword}"`}
            </div>
          </React.Fragment>

          <div className="row no-gutters mx-auto px-md-5 px-3 pb-4" style={{ maxWidth: "1300px" }}>
            <div className="col-12">
              <FiltersPanel
                listings={listings}
                setListings={setListings}
                initialListings={initialListings}
              ></FiltersPanel>
              <div className="row">
                {listings.length ? (
                  listings.slice((page - 1) * 8, (page - 1) * 8 + 8).map((x, i) =>
                    size.width > 558 ? (
                      <div key={`listing-${i}`} className="col-lg-3 col-md-4 col-6 p-3">
                        <ListingCard rememberPost={rememberPost} listing={x}></ListingCard>
                      </div>
                    ) : (
                      <div key={`listing-${i}`} className="col-12 p-3">
                        <ListingCardMobile
                          rememberPost={rememberPost}
                          listing={x}
                        ></ListingCardMobile>
                      </div>
                    )
                  )
                ) : (
                  <div className="col-auto d-md-flex mx-auto my-5 p-4 align-items-center justify-content-center">
                    <div className="mr-md-3 text-center my-3">
                      <Zero></Zero>
                    </div>
                    <div className="text-md-left text-center">
                      <div className="mb-2" style={{ fontSize: "36px", fontWeight: "700" }}>
                        Neturime ką parodyti
                      </div>
                      <div style={{ fontSize: "18px" }}>
                        Pakeiskite paieškos žodžius arba<br></br> pasirinkite kitą kategoriją
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="row no-gutters justify-content-end py-3">
                <Pagination
                  count={Math.ceil(listings.length / 8)}
                  current={page}
                  setCurrent={setPage}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      )}
    </SizeMe>
  );
};

export default ListingsPage;
