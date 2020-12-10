import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import ListingCardMobile from "./ListingCardMobile";
import Listings from "../../data/listings";
import Pagination from "./Pagination";
import { SizeMe } from "react-sizeme";
import FiltersPanel from "./FiltersPanel";

const ListingsPage = () => {
  const [listings, setListings] = useState(Listings);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <SizeMe>
      {({ size }) => (
        <div className="container-fluid main p-md-5 p-4">
          <div className="row no-gutters mx-auto" style={{ maxWidth: "1250px" }}>
            <div className="col-12">
              <FiltersPanel listings={listings} setListings={setListings}></FiltersPanel>
              <div className="row">
                {listings.slice((page - 1) * 8, (page - 1) * 8 + 8).map((x, i) =>
                  size.width > 558 ? (
                    <div key={`listing-${i}`} className="col-lg-3 col-md-4 col-6 p-3">
                      <ListingCard listing={x}></ListingCard>
                    </div>
                  ) : (
                    <div key={`listing-${i}`} className="col-12 p-3">
                      <ListingCardMobile listing={x}></ListingCardMobile>
                    </div>
                  )
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
