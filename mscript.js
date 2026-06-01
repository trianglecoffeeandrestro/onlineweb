const pages = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
];

const pageImage = document.getElementById("pageImage");
const pageLabel = document.getElementById("pageLabel");
const pageTurn = document.getElementById("pageTurn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0;

function updatePage() {
  pageImage.src = pages[currentPage];
  pageImage.alt = `Page ${currentPage + 1}`;
  pageLabel.textContent = `${currentPage + 1} / ${pages.length}`;
}

function flashTurn() {
  pageTurn.classList.add("turning");
  window.setTimeout(() => {
    pageTurn.classList.remove("turning");
  }, 220);
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    flashTurn();
    updatePage();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage -= 1;
    flashTurn();
    updatePage();
  }
}

nextBtn.addEventListener("click", nextPage);
prevBtn.addEventListener("click", previousPage);

updatePage();