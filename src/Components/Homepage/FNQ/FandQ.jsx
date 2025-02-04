import React from "react";
import "./FandQ.css";

function FandQ() {
  return (
    <div>
      <div className="container">
        <h2>Still looking for the one? </h2>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer"
            type="checkbox"
          />
          <label className="faq-drawer__title" for="faq-drawer">
            How do I choose the right mattress firmness?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
                - Roommate offers mattresses with varying levels of firmness,
                from plush to firm. Consider your personal preferences and
                sleeping habits to choose the right level of support for you.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-2"
            type="checkbox"
          />
          <label className="faq-drawer__title" for="faq-drawer-2">
            Are Roommate mattresses suitable for all sleeping positions?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
                - Yes, Roommate mattresses are designed to accommodate all
                sleeping positions, including side, back, and stomach sleepers,
                ensuring proper spinal alignment and comfort.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-3"
            type="checkbox"
          />
          <label className="faq-drawer__title" for="faq-drawer-3">
            Do Roommate mattresses come with a warranty?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
                - Yes, all Roommate mattresses come with a warranty. We have 5
                and 8 years replacement warranty.
              </p>
            </div>
          </div>
        </div>
        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-4"
            type="checkbox"
          />
          <label className="faq-drawer__title" for="faq-drawer-4">
            How long can I expect a Roommate mattress to last?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
                - Roommate mattresses are crafted with high-quality materials to
                ensure durability. With proper care, you can expect a Roommate
                mattress to provide exceptional comfort. At least 8-10 years it
                can last depending on how you use Circulate the mattress from
                time to time and don’t get it wet.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-5"
            type="checkbox"
          />
          <label className="faq-drawer__title" for="faq-drawer-5">
            DRAWER Five
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FandQ;
