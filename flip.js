const flipBlockInner = document.querySelectorAll('.flip__block-inner');

for (let i = 0; i < flipBlockInner.length; i++) {
    flipBlockInner[i].addEventListener('mouseover', function() {
        flipBlockInner[i].classList.add('hover');
    });
}

for (let j = 0; j < flipBlockInner.length; j++) {
    flipBlockInner[j].addEventListener('mouseout', function() {
        flipBlockInner[j].classList.remove('hover');
    });
}

// const cbox = document.querySelectorAll(".box");

//  for (let i = 0; i < cbox.length; i++) {
//      cbox[i].addEventListener("click", function() {
//        cbox[i].classList.toggle("red");
//      });
//  }



// flipBlockRect.addEventListener('mouseover', (event) => {
//     secondRect.classList.add('hover');
// });

// flipBlockRect.addEventListener('mouseout', (event) => {
//     secondRect.classList.remove('hover');
// });