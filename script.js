const ratingBtns = document.querySelectorAll(".ratingState_rating-button");
const ratingValue = document.querySelector(".ratingState__rating-input");
const submitBtns = document.querySelector(".ratingState__rating-submitBtn");
const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");
const score = document.querySelector(".thankYouState__score")

ratingBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    ratingValue.value = index + 1;

    ratingBtns.forEach((i) => {
      i.style.setProperty("background-color", "var(--darkBlue)");
      i.style.setProperty("color", "var(--lightGrey)");
    });

    item.style.setProperty("background-color", "var(--orange)");
    item.style.setProperty("color", "var(--white)");
  });
});

submitBtns.addEventListener("click", (e) => {
  e.preventDefault();



  if (ratingValue.value) {
    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
    score.textContent = ratingValue.value
  } else {
    window.alert("Please select a number feedback");
  }
});
