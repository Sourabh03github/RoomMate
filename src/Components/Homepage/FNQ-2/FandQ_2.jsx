import React from "react";
import "./FandQ_2.css";

function FandQ_2() {
  const toggles = document.querySelectorAll(".faq-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
    });
  });
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div class="faq-container">
        <div class="faq active">
          <h3 class="faq-title">Why shouldn't we trust atoms?</h3>
          <p class="faq-text">They make up everything</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="faq">
          <h3 class="faq-title">
            What do you call someone with no body and no nose?
          </h3>
          <p class="faq-text">Nobody knows.</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="faq">
          <h3 class="faq-title">
            What's the object-oriented way to become wealthy?
          </h3>
          <p class="faq-text">Inheritance.</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="faq">
          <h3 class="faq-title">
            How many tickles does it take to tickle an octopus?
          </h3>
          <p class="faq-text">Ten-tickles!</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="faq">
          <h3 class="faq-title">What is: 1 + 1?</h3>
          <p class="faq-text">Depends on who are you asking.</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FandQ_2;
