import React from "react";

const TopNav = () => {
  return (
    <div className="wrapper topnav--wrapper">
      <img src="Logo-lockup.png" alt="" className="logo" />
      <div className="topnav__rightside">
        <div className="rightside__left">
          <i className="bi bi-headset">{" "}Support</i>
          <i className="bi bi-geo-alt">{" "}Find a store</i>
        </div>
        <div className="rightside__right">
          <i className="bi bi-heart"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-bag"></i>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
