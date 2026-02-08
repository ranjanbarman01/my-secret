const noBtn = document.getElementById("noBtn");
const text = document.getElementById("text");

const funny = [
  "Please no 😭",
  "Soch lo 😜",
  "Dil toot jayega 💔",
  "Itna bhi bura nahi hoon 🥺"
];

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random()*150 + "px";
  noBtn.style.top = Math.random()*80 + "px";

  text.innerText = funny[Math.floor(Math.random()*funny.length)];
});
// mobile touch support
noBtn.addEventListener("touchstart", () => {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random()*120 + "px";
  noBtn.style.top = Math.random()*80 + "px";

  text.innerText = funny[Math.floor(Math.random()*funny.length)];
});

function goYes(){
  window.location.href = "yes.html";
}
