const calculator = document.querySelector(".calculator");
const previousOperand = document.querySelector(".previous");
const nextOperand = document.querySelector(".next");

const allClearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete");
const equalsButton = document.querySelector("[data-delete");

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

numberButtons.forEach((button) => {
  button.addEventListener("click", appendNumber);
});

operationButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (nextOperand.textContent === "") return;

    // console.log(e.target.textContent);

    calculateNumber(e);
  });
});

allClearButton.addEventListener("click", allClear);
deleteButton.addEventListener("click", deleteNumber);

// appendNumber() funksiyasi bosilgan sonni va nuqtani yonma-yon qo'shishi kerak.
function appendNumber() {
  if (this.textContent === "." && nextOperand.textContent.includes(".")) return;
  nextOperand.textContent += this.textContent;
}
// allclear() funksiyasi hamma narsani o'chirishi kerak
function allClear() {
  previousOperand.textContent = "";
  nextOperand.textContent = "";
}
// delete() funksiyasi faqat oxirgi sonni yoki amalni o'chirishi kerak.
function deleteNumber() {
  nextOperand.textContent = nextOperand.innerText.slice(0, -1);
}

// computeNumber() funksiyasi oldin bosilgan amalni bajarishi kerak.
function calculateNumber(e) {
  let hisob;
  let prev = parseFloat(previousOperand.textContent);
  let next = parseFloat(nextOperand.textContent);

  prev = isNaN(prev) ? 0 : prev;
  next = isNaN(next) ? 0 : next;

  //   if (isNaN(prev) || isNaN(next)) return;
  //   console.log(this);
  if (e.target.textContent === "+") {
    hisob = prev + next;
  } else if (e.target.textContent === "-") {
    hisob = prev - next;
  } else if (e.target.textContent === "*") {
    hisob = prev * next;
  } else if (e.target.textContent === "÷") {
    hisob = prev / next;
  } else {
    return;
  }
  previousOperand.textContent = hisob;
  nextOperand.textContent = "";
}
// displayNumber() funksiyasi bosilgan sonni yoki amalni ekranda chiqarishi kerak

// equals() funksiyasi amalning javobini hisoblashi kerak.
