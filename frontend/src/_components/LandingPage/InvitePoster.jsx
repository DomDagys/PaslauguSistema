import React from "react";
import GirlFreelancing from "../Images/GirlFreelancing";

const InvitePoster = () => {
  let antraste = "Norite tapti Freelanceriu?";
  let detales = "Prisijunkite ir kelkite skelbimus nemokamai.";
  return (
    <div className="d-flex justify-content-center bg-theme text-white align-items-center">
      <div className="py-5" style={{ maxWidth: "1400px" }}>
        <div className="row no-gutters justify-content-between">
          <div className="col-5 p-4 d-none d-lg-block">
            <GirlFreelancing></GirlFreelancing>
          </div>
          <div className="col-12 col-lg-6 p-5">
            <div
              className="row no-gutters mb-4 d-none d-md-flex"
              style={{ fontSize: "46px", fontWeight: "700" }}
            >
              {antraste}
            </div>
            <div
              className="row no-gutters mb-4 d-flex d-md-none"
              style={{ fontSize: "34px", fontWeight: "700" }}
            >
              {antraste}
            </div>
            <div className="row no-gutters mb-4 d-flex d-md-none" style={{ fontSize: "18px" }}>
              {detales}
            </div>
            <div className="row no-gutters mb-4 d-none d-md-flex" style={{ fontSize: "28px" }}>
              {detales}
            </div>
            <div className="d-flex">
              <a href="/account/register">
                <div
                  className="col-auto px-5 py-2 bg-theme-darker d-none d-md-block"
                  style={{ borderRadius: "25px", fontSize: "18px" }}
                >
                  Pradėti
                </div>
              </a>
              <div
                className="col-auto px-5 py-3 bg-theme-darker d-block d-md-none"
                style={{ borderRadius: "25px", fontSize: "14px" }}
              >
                Pradėti
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitePoster;
