const form = document.querySelector("form");
const main = document.querySelector("main");

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
  showAnswer.classList.add("Answer.hidden");
  tagList.classList.add("card__container__tagbox");
  tagBox.classList.add("card__button");
  bookmark.classList.add("bookmark");
});
