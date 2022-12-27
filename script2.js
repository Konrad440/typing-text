const spanText = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const txt = ["Dzień dobry", "Dobrze że jesteś", "No to zaczynamy"];
// Parametry

let activeLetter = 0;
let activeText = 0;

// Implementacja

const addLetter = () => {
  // Użyj w środku setTimeout
  if (activeLetter >= 0) {
    spanText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;
    return setTimeout(() => {
      activeLetter = 0;
      spanText.textContent = "";
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 100);
};

addLetter(); // pierwsze wywołanie

const cursorAnimation = () => {
  spanCursor.classList.toggle("active");
};

setInterval(cursorAnimation, 400);
