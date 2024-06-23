import React from "react";

export const Banner = () => {
  return (
    <div>
      <section class="banner flex_center">
        <div class="banner_list flex">
          <div class="banner-items flex_center">
            <div class="banner_logo">
              <i class="fa-sharp fa-solid fa-award"></i>
            </div>
            <div class="banner_content">
              <h3>IT</h3>
              <h4>graduation</h4>
            </div>
            <div class="divider"></div>
          </div>
          <div class="banner-items flex_center">
            <div class="banner_logo">
              <i class="fa-sharp fa-solid fa-award"></i>
            </div>
            <div class="banner_content">
              <h3>5 + Projects</h3>
              <h4>Completed</h4>
            </div>
            <div class="divider"></div>
          </div>
          <div class="banner-items flex_center">
            <div class="banner_logo">
              <i class="fa-sharp fa-solid fa-award"></i>
            </div>
            <div class="banner_content">
              <h3>1 + Year</h3>
              <h4>Expreince</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
