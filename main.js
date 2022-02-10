const keyQuestionInput = document.querySelector("#key-question");
const valueAnswerInput = document.querySelector("#value-answer");
const formKeyValue = document.querySelector(".form");
const displayDiv = document.querySelector(".display");

const sessionStorageHandler = (e) => {
  e.preventDefault();
  let key = keyQuestionInput.value.trim();
  let value = valueAnswerInput.value.trim();
  if (key && value) {
    if (key.charAt(key.length - 1) != "?") {
      key = `${key}?`;
    }
    sessionStorage.setItem(key, value);
  } else {
    return alert("Please introduce both values!");
  }

  keyQuestionInput.value = "";
  valueAnswerInput.value = "";

  displaySessionStorage();
};

const displaySessionStorage = () => {
  for (let i = 1; i < sessionStorage.length; i++) {
    let sessionKey = sessionStorage.key(i);
    let sessionValue = sessionStorage.getItem(sessionKey);

    let list = document.createElement("div");
    displayDiv.append(list);
    list.classList.add("list");
    list.textContent = `${sessionKey} ${sessionValue}`;
  }
};

formKeyValue.addEventListener("submit", sessionStorageHandler);
