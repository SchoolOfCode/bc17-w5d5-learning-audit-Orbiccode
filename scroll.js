const list = document.getElementById("list");
list.addEventListener("scroll", function() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      for (let i = 0; i < 5; i++) { // Append 5 new items
        const newItem = document.createElement("li");
        list.appendChild(newItem)
      }
    }
  });
  console.log(list.clientHeight)