// const col = ["orange", "dodgerblue", "red", "pink", "gold"];

// async function hasLocalStorage(next, create) {
//   let colorIndex = Number(localStorage.getItem("bg-color-index"));
//   if (colorIndex !== null) {
//     // next(colorIndex);
//     Promise.resolve(colorIndex);
//   } else {
//     Promise.reject();
//   }
// };

// // var hasLocalStorage = hasLocalStorage();

// hasLocalStorage().then(
//   function(colorIndex) {
//     colorIndex++;
//     colorIndex %= col.length;

//     setBackground(colorIndex);
//   },
//   function() {
//     let colorIndex = 0;
//     setBackground(colorIndex);
//   }
// );

// function setBackground(colorIndex) {
//   document.body.style.backgroundColor = col[colorIndex];
//   localStorage.setItem("bg-color-index", colorIndex);
// }


// preserved code
const col = ["orange", "dodgerblue", "red", "pink", "gold"];

// checks that local storage has 'bg-color-theme'
var hasLocalStorage = new Promise(function (next, create) {
  let colorIndex = Number(localStorage.getItem("bg-color-index"));
  if (colorIndex !== null) {
    next(colorIndex);
  } else {
    create();
  }
});

// set background according 
hasLocalStorage.then(
  function(colorIndex) {
    colorIndex++;
    colorIndex %= col.length;

    setBackground(colorIndex);
  },
  function() {
    let colorIndex = 0;
    setBackground(colorIndex);
  }
);

function setBackground(colorIndex) {
  document.body.style.backgroundColor = col[colorIndex];
  localStorage.setItem("bg-color-index", colorIndex);
}
