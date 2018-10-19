var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputValLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  return true;
}

function addListAfterClick() {
    if (inputValLength() > 0 ) {
      createListElement();
    }
  }
button.addEventListener("click", addListAfterClick);

function addListAfterKeypress(event) {
    if (inputValLength() > 0 && event.keyCode === 13 ) {
      createListElement();
    }
  }

input.addEventListener("keypress", addListAfterKeypress);
