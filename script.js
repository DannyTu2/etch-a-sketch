
const button = document.querySelector('button');
button.addEventListener("click", function() {
    let numberPerRow;
    do {
        numberPerRow = prompt("Please enter desired row (maximum 100)", 16);
        numberPerRow = parseInt(numberPerRow, 10);

        if (numberPerRow > 100) {
            alert("The number of rows cannot exceed 100. Please enter a value between 1 and 100.");
        } else if (isNaN(numberPerRow) || numberPerRow < 1) {
            alert("Please enter a valid number between 1 and 100.");
        }
    } while (numberPerRow > 100 || isNaN(numberPerRow) || numberPerRow < 1);

    createBoxes(numberPerRow);

});

function createBoxes(numberPerRow) {
    const cdiv = document.querySelector('.container');
    cdiv.innerHTML= '';
    // 16 x 16 = 256 + 16 = 272
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
       if (i % mod === 0) {
         div.style.cssText = "border: 0; height: 0; width: 100%";
       } else {
         div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
         div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "purple";
          });
       }
  
      cdiv.appendChild(div);
    }

  }
  




