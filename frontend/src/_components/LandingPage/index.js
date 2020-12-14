import React from "react";
import Categories from "./Categories";
import InvitePoster from "./InvitePoster";
import Footer from "./Footer";
import CornerMobile from "../Images/CornerMobile";
import { SizeMe } from "react-sizeme";
import MainPage from "./MainPage";
import MainPageMobile from "./MainPageMobile";
import "./Css/landing.css";
import { accountService } from "@/_services";

const LandingPage = () => {
  const user = accountService.userValue;
  return (
    <SizeMe>
      {({ size }) => (
        <div
          className="container-fluid px-0 main mx-auto"
          style={{ minHeight: "100vh", overflowX: "hidden" }}
        >
          {size.width > 767 ? (
            <MainPage user={user}></MainPage>
          ) : (
            <MainPageMobile user={user}></MainPageMobile>
          )}
          <Categories></Categories>
          <InvitePoster></InvitePoster>
          <Footer></Footer>
        </div>
      )}
    </SizeMe>
  );
};

export default LandingPage;
