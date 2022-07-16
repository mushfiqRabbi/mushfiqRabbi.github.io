"use strict";

const docEl = document.documentElement;
const btnEl = document.querySelector("button");
const inEl = document.getElementById("input-email");
const msg = document.querySelector(".msg");

btnEl.addEventListener("click", () => {
  if (inEl.value === "" || !inEl.checkValidity()) {
    msg.classList.remove("hidden");
    inEl.classList.add("warning");
    inEl.focus();
  } else if (!msg.classList.contains("hidden")) {
    inEl.classList.remove("warning");
    msg.classList.add("hidden");
  }
});
