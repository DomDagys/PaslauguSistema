import React, { useState, useEffect } from "react";
import { postService, accountService } from "@/_services";
import Navbar from "../Navbar";
import ListingCard from "./ListingCard";
import ListingCardMobile from "./ListingCardMobile";

const Component = () => {
  const [listings, setListings] = useState([]);
  const user = accountService.userValue;
  useEffect(() => {
    if (user) {
      postService.getRememberedPosts(user.id).then((res) => {
        if (res.success) {
          setListings(res.data);
        }
      });
    }
  }, []);
  return (
    <div className="container-fluid main pb-5">
      <Navbar></Navbar>
      <div style={{ maxWidth: "1300px" }} className="w-100 mx-auto px-3">
        <div className="mb-2 px-3" style={{ fontSize: "36px", fontWeight: "700" }}>
          Įsiminti skelbimai
        </div>
        <div className="row no-gutters d-none d-md-flex">
          {listings.map((x, i) => (
            <div key={`listing-${i}`} className="col-lg-3 col-md-4 col-6 p-3">
              <ListingCard listing={x}></ListingCard>
            </div>
          ))}
        </div>
        <div className="row no-gutters d-flex d-md-none">
          {listings.map((x, i) => (
            <div key={`listing-${i}`} className="col-12 p-3">
              <ListingCardMobile listing={x}></ListingCardMobile>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component;
