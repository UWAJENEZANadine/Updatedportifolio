import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./HomeLayout.css"

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="Layout-container">
        <div style={{ minheight: "250vh" }}>{children}</div>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export default HomeLayout;
