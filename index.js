const button = document.getElementById("button");

let count = document.getElementById("count")
let numberText = count.textContent
console.log(numberText)

numberText = 0
button.addEventListener("click", () => {
  numberText = numberText + 1;
  count.textContent = numberText;
})
const list = document.getElementById("list");
list.addEventListener("scroll", function() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      for (let i = 0; i < 5; i++) { // Append 5 new items
        console.log((list.scrollTop + list.clientHeight >= list.scrollHeight));
        const newItem = document.createElement("li");
        newItem.setAttribute('class', 'list-item')
        newItem.textContent = "New Item " + (list.children.length + 1)
        console.log((list.scrollTop + list.clientHeight >= list.scrollHeight));;
        list.appendChild(newItem)
        console.log((list.scrollTop + list.clientHeight >= list.scrollHeight));;
      }
      console.log(list.innerHTML);
      console.log((list.scrollTop + list.clientHeight >= list.scrollHeight));
    }
    console.log((list.scrollTop + list.clientHeight >= list.scrollHeight));
  });