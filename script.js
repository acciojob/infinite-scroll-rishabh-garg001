const list = document.getElementById("infi-list");
let count = 1;

function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.innerText = "Item " + count;
    list.appendChild(li);
    count++;
  }
}

addItems(10);
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 1) {
    addItems(2);
  }
});