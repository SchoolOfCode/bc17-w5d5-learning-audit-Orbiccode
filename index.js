const button = document.getElementById("button");

let count = document.getElementById("count")
let numberText = count.textContent
console.log(numberText)

numberText = 0
button.addEventListener("click", () => {
  numberText = numberText + 1;
  count.textContent = numberText;
})