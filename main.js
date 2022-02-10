const keyQuestionInput = document.querySelector("#key-question");
const valueAnswerInput = document.querySelector("#value-answer");
const formKeyValue = document.querySelector(".form");
const displayDiv = document.querySelector(".display");
const resetBtn = document.querySelector("#reset");

const sessionStorageHandler = (e) => {
  e.preventDefault();
  let key = keyQuestionInput.value.trim();
  let value = valueAnswerInput.value.trim();
  if (key && value) {
    if (key.charAt(key.length - 1) != "?") {
      key = `${key}?`;
    }
    sessionStorage.setItem(key, value);

    displayDiv.innerHTML = "";
    displaySessionStorage();
  } else {
    alert("Please introduce both values!");
  }
  keyQuestionInput.value = "";
  valueAnswerInput.value = "";
};

const displaySessionStorage = () => {
  for (let i = 0; i < sessionStorage.length; i++) {
    let sessionKey = sessionStorage.key(i);
    let sessionValue = sessionStorage.getItem(sessionKey);

    let list = document.createElement("div");
    displayDiv.append(list);
    list.classList.add("list");
    list.innerHTML += `${sessionKey} : ${sessionValue}`;
  }
};

const clearSessionStorage = () => {
  sessionStorage.clear();
  displayDiv.innerHTML = "";
};

window.addEventListener("load", () => {
  displayDiv.innerHTML = "";
  displaySessionStorage();
});
formKeyValue.addEventListener("submit", sessionStorageHandler);
resetBtn.addEventListener("click", clearSessionStorage);
