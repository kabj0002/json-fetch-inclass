//JSON er et array af objekter

window.addEventListener("DOMContentLoaded", init);

const id = 1163;
const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;
const imgURI = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function init() {
  fetch(uri)
    .then((response) => response.json())
    .then(handleData);
}

function handleData(json) {
  console.log("json", json);

  document.querySelector("h1").textContent = json.productdisplayname;
  document.querySelector("p").textContent = json.brandbio;

  document.querySelector("img").src = imgURI;
  document.querySelector("img").alt = `image of ${json.productdisplayname}`;
}
