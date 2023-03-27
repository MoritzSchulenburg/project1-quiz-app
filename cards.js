document
  .querySelectorAll('[data-js="bookmark-button"]')
  .forEach((bookmarkButton) => {
    // console.log(bookmarkButton);
    bookmarkButton.addEventListener("click", () => {
      // console.log("i was clicked: ", bookmarkButton);
      bookmarkButton.classList.toggle("selected");
      const isSelected = bookmarkButton.classList.contains("selected");
      const img = bookmarkButton.querySelector("img");
      // console.log(img.getAttribute("src"));
      if (isSelected) {
        img.setAttribute("src", "./assets/bookmark_filled.png");
      } else {
        img.setAttribute("src", "./assets/bookmark.png");
      }
    });
  });

document.querySelectorAll("section.card").forEach((card) => {
  let button = card.querySelector(".card__button");
  let answer = card.querySelector(".Answer");
  console.log(button);
  // console.log(bookmarkButton);
  button.addEventListener("click", () => {
    // console.log("i was clicked: ", bookmarkButton);
    answer.classList.toggle("hidden");

    if (button.textContent === "Show Answer") {
      button.textContent = "Hide Answer";
    } else {
      button.textContent = "Show Answer";
    }
  });
});
