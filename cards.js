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
