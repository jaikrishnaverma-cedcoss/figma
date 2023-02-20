import React from "react";

const BottomNav = () => {
  return (
    <div className="wrapper bottomnav--wrapper">
      <div className="tabs">
        <span>WOMEN</span>
        <span>MEN</span>
        <span>KIDS</span>
      </div>
      <hr />
      <div className="bottomnav__navs">
        <div className="left__navs">
          <span>SALE</span>
          <span>NEW IN</span>
          <span>CLOTHING</span>
          <span>SHOES</span>
          <span>ACCESSORIES</span>
          <span>BRANDS</span>
        </div>
        <div className="right__navs">
          <span>
            <i className="bi bi-search"></i>
          </span>
          <input type="text" placeholder="Search products,articles..." className="nav__search__input" />
          <span>
            <i className="bi bi-mic"></i>
          </span>
          <span style={{borderLeft:'1px solid grey'}}>
            <img  src="Camera.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
