const form = document.querySelector("form");
const main = document.querySelector("main");

const amountLeft1 = document.getElementById("amountLeft1");
const amountLeft2 = document.getElementById("amountLeft2");

const inputQuestionValue = document.getElementById("question");
const inputAnswerValue = document.getElementById("answer");

inputQuestionValue.addEventListener("input", () => {
  const newLength = inputQuestionValue.value.length;
  amountLeft1.textContent = 150 - newLength;
});

inputAnswerValue.addEventListener("input", () => {
  const newLength = inputAnswerValue.value.length;
  amountLeft2.textContent = 150 - newLength;
});

let questionText = "";
let answerText = "";
let tagText = "";

/* 

<section class="card">
        <p class="card__text">what property flips the axes in flexbox?</p>
        <button class="card__button">Show Answer</button>
        <p class="Answer hidden">this is the correct Answer</p>
        <ul class="card__container__tagbox">
          <li>#html</li>
          <li>#flexbox</li>
          <li>#css</li>
        </ul>
        <button class="bookmark" data-js="bookmark-button">
          <img src="./assets/bookmark.png" width="50px" alt="" />
        </button>
      </section>


*/
function cardTitle(title) {
  const cardtext = document.createElement("p");
  cardtext.classList.add("card__text");
  cardtext.textContent = title;
  return cardtext;
}

function createCard(title, answer, tags) {
  const card = document.createElement("section");
  card.classList.add("card");
  const cardTitle = cardTitle(title);
  //Create cardTitle
  // Create cardButton
  // Creat Answer
  // Create tag
  // Create bookmark

  card.append(cardTitle);
  main.append(card);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(document.querySelector("form"));
  const data = Object.fromEntries(formData);

  console.log(data);

  questionText = data.question;
  answerText = data.answer;
  tagText = data.tag;

  // Creat Card (questionText, answerText, tagText)

  const card = document.createElement("section");
  card.classList.add("card");

  const cardtext = document.createElement("p");
  cardtext.classList.add("card__text");
  cardtext.textContent = questionText;

  const showAnswer = document.createElement("p");
  showAnswer.classList.add("Answer", "hidden");
  showAnswer.textContent = answerText;

  const tagBox = document.createElement("ul");
  tagBox.classList.add("card__container__tagbox");

  const tagList = document.createElement("li");

  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark");

  main.append(card);
  card.append(cardtext);
  card.append(bookmark);
  card.append(showAnswer);
  card.append(tagBox);
  card.append(tagList);

  tagText.textContent = tagText;
  tagBox.textContent = "Show Answer";
  event.target.reset();

  //   const cardInput = card.value;
  //   const cardQuestionInput = document.getElementById("question").value;
  //   const cardShowAnswerInput = document.getElementById("answer").value;
  //   const cardTagInput = document.getElementById("tag").value;

  //   card.innerHTML.

  // tagBox.classList.add("card__container__tagbox.li");

  // // const questionElement = document.querySelector('[data-js="card"]');
  // // const amountLeft = document.querySelector('[data-js="amountLeft"]');
  // // const maxLength = questionElement.getAttribute("maxlength");

  // // const updateAmountLeft = (value) => {
  // //   amountLeft.innerText = value;
  // // };

  // // updateAmountLeft(maxLength);

  // // questionElement.addEventListener("input", () => {
  // //   updateAmountLeft(maxLength - questionElement.value.length);
  // });
});
