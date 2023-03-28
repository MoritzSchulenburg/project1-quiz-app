// function toggleButton(event) {
//     const toggleButton = event.target;
//     toggleButton.classList.toggle (.bookmark);

// }

// Adding  functionality for the Darkmode
const toogle = document.querySelector('[class="switch"]');

// This code I got it from youtube video: https://www.youtube.com/watch?v=Xk12JtYG8rw&ab_channel=EnvatoTuts%2B
// it is modified to match our coding level

function switchTheme() {
  // get the Root elemnt and the data-theme value

  // This retrives the html tag
  const rootElement = document.documentElement;

  // This retrives the data-theme value that we set in HTML
  let dataTheme = rootElement.getAttribute("data-theme");

  let newTheme;

  // if the data-theme is initialized with "light", then it will change to "dark"
  // if not, then it will be initialized with "dark", and therfore change to "light"
  if (dataTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }

  // Set new attribute, that is "data-theme" to the new Theme
  rootElement.setAttribute("data-theme", newTheme);
}

toogle.addEventListener("change", () => {
  switchTheme();
});
