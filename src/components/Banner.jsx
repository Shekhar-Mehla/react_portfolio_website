import React from "react";

export const Banner = () => {
  return (
    <div>
      <section className="banner flex_center">
        <div className="banner_list flex">
          <div className="banner-items flex_center">
            <div className="banner_logo">
              <i className="fa-sharp fa-solid fa-award"></i>
            </div>
            <div className="banner_content">
              <h3>IT</h3>
              <h4>graduation</h4>
            </div>
            <div className="divider"></div>
          </div>
          <div className="banner-items flex_center">
            <div className="banner_logo">
              <i className="fa-sharp fa-solid fa-award"></i>
            </div>
            <div className="banner_content">
              <h3>5 + Projects</h3>
              <h4>Completed</h4>
            </div>
            <div className="divider"></div>
          </div>
          <div className="banner-items flex_center">
            <div className="banner_logo">
              <i className="fa-sharp fa-solid fa-award"></i>
            </div>
            <div className="banner_content">
              <h3>1 + Year</h3>
              <h4>Expreince</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
