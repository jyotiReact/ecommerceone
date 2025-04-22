import React from "react";
import Link from "next/link";
import { ArrowRightLong } from "@/svg";

const JewelryAbout = () => {
  return (
    <>
      <section className="tp-about-area pt-125 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35">
                <div className="tp-about-thumb m-img">
                  <img src={'/assets/img/about/about-1.jpg'} alt="about_img" />
                </div>
                <div className="tp-about-thumb-2">
                  <img
                    src={"/assets/img/about/about-2.jpg"}
                    alt="about_thumb"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-80 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">
                    Unity Collection
                  </span>
                  <h3 className="tp-section-title-4 fz-50">
                    Shop our limited Edition Collaborations
                  </h3>
                </div>
                <div className="tp-about-content pl-120">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> Cras vel mi quam. Fusce vehicula vitae mauris sit
                    amet tempor. Donec consectetur lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna.
                  </p>

                  <div className="tp-about-btn">
                    <Link href="/contact" className="tp-btn">
                      Contact Us <ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryAbout;
