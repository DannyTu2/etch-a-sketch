const generateButton = document.querySelector(".generateButton");
const clearButton = document.querySelector(".clearButton");
generateButton.addEventListener("click", function () {
  let numberPerRow;
  do {
    numberPerRow = prompt("Please enter desired row (maximum 42)", 16);
    numberPerRow = parseInt(numberPerRow, 10);

    if (numberPerRow > 42) {
      alert(
        "The number of rows cannot exceed 42. Please enter a value between 1 and 42."
      );
    } else if (isNaN(numberPerRow) || numberPerRow < 1) {
      alert("Please enter a valid number between 1 and 42.");
    }
  } while (numberPerRow > 42 || isNaN(numberPerRow) || numberPerRow < 1);

  createBoxes(numberPerRow);
});

function createBoxes(numberPerRow) {
  const cdiv = document.querySelector(".container");
  cdiv.innerHTML = "";
  const total = numberPerRow * numberPerRow + numberPerRow;
  const mod = numberPerRow + 1;

  let isDrawing = false;

  for (let i = 1; i < total; i++) {
    const div = document.createElement("div");
    if (i % mod === 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      div.style.cssText =
        "border: 1px solid black; height: 25px; width: 25px; user-select:none; -webkit-user-drag:none;";

      div.addEventListener("mousedown", (event) => {
        isDrawing = true;
        event.target.style.backgroundColor = "purple";
      });

      clearButton.addEventListener("click", function () {
        div.style.cssText =
          "border: 1px solid black; height: 25px; width: 25px; user-select:none; -webkit-user-drag:none;";
      });

      div.addEventListener("mouseover", (event) => {
        if (isDrawing) {
          event.target.style.backgroundColor = "purple";
        }

        div.addEventListener("mouseup", () => {
          isDrawing = false;
        });

        window.addEventListener("mouseup", () => {
          isDrawing = false;
        });
      });
    }
    cdiv.appendChild(div);
  }
}
