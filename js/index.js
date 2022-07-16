"use strict";

const docEl = document.documentElement;
const btnEl = document.querySelector("button");
const inEl = document.getElementById("input-email");
const msg = document.querySelector(".msg");
const imgCont = document.querySelector(".right");
const elLeft = document.querySelector(".left");
const imgContCopy = imgCont.cloneNode(true);

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

const mediaQueryM = window.matchMedia("(max-width: 415px)");
const mediaQueryD = window.matchMedia("(min-width: 416px");

function forDesktop(mq) {
  if (mq.matches) {
    imgCont.remove();
    document.body.appendChild(imgContCopy);
  }
}

function forMobile(mq) {
  if (mq.matches) {
    imgCont.remove();
    elLeft.insertBefore(imgContCopy, elLeft.children[1]);
  }
}
forDesktop(mediaQueryD);
forMobile(mediaQueryM);

mediaQueryD.addListener(forDesktop);
mediaQueryM.addListener(forMobile);
