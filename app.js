"use strict";

const btn = document.querySelector(".btn__btn");
const id = document.querySelector(".advice__id");
const adviceHTML = document.querySelector(".advice__advice");

const displayAdvice = function (advice) {
  adviceHTML.textContent = `“${advice.advice}”`;
  id.textContent = advice.id;
};

const getAdvice = async function () {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error("error");
    }
    const advice = await res.json();
    displayAdvice(advice.slip);
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", function () {
  getAdvice();
});
