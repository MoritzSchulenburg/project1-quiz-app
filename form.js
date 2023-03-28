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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(document.querySelector("form"));
  const data = Object.fromEntries(formData);

  console.log(data);

  questionText = data.question;
  answerText = data.answer;
  tagText = data.tag;

  const card = document.createElement("section");
  const cardtext = document.createElement("p");
  const bookmark = document.createElement("img");
  const showAnswer = document.createElement("p");
  const tagBox = document.createElement("ul");
  const tagList = document.createElement("li");

  main.append(card);
  card.append(cardtext);
  card.append(bookmark);
  card.append(showAnswer);
  card.append(tagBox);
  card.append(tagList);

  cardtext.textContent = questionText;
  showAnswer.textContent = answerText;
  tagText.textContent = tagText;
  tagBox.textContent = "Show Answer";
  event.target.reset();

  //   const cardInput = card.value;
  //   const cardQuestionInput = document.getElementById("question").value;
  //   const cardShowAnswerInput = document.getElementById("answer").value;
  //   const cardTagInput = document.getElementById("tag").value;

  //   card.innerHTML.

  card.classList.add("card");
  cardtext.classList.add("card__text");
  showAnswer.classList.add("Answer", "hidden");
  tagList.classList.add("card__container__tagbox");
  tagBox.classList.add("card__container__tagbox.li");
  bookmark.classList.add("bookmark");

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

//   const questionTextAreaElement = document.querySelector("#question");
//   const answerTextAreaElement = document.querySelector("#answer");

//   const questionCharacterElement = document.querySelector("#question-count");
//   const answerCharacterElement = document.querySelector("answer-count");

//   const questionTypedCharactersElement = document.querySelector("#current");
//   const answerTypedCharactersElement = document.querySelector("#currentAnswer");

//   questionTextAreaElement.addEventListener("input", () => {
//     const questionTypedCharacters = questionTextAreaElement.ariaValueMax.length;

//     questionTypedCharactersElement.textContent = questionTypedCharacters;
//   });

//   answerTextAreaElement.addEventListener("input", () => {
//     const answerTypedCharacters = answerTextAreaElement.ariaValueMax.length;
//     answerTypedCharactersElement.textContent = answerTypedCharacters;
//   });
