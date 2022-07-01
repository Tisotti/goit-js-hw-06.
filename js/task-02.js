const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// 1. создать переменную в ней достучатьсчя до списка ul
// 2. при помощи map вставить тег li class=item 

let ulEl = document.querySelector("ul");
const markup = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join("");
console.log(markup);
ulEl.innerHTML = markup;