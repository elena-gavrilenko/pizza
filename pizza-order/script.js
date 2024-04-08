import { ingredientsPrice, ingredients } from './constants/ingredients.js';
import { addIngredients } from './utils/rendering.js';
import { addYourIngredients } from './utils/formation.js';
import {
  percentResult,
  percentDeleteResult,
  switchButton,
  btn,
} from './utils/percent.js';
import {
  ingredientsYourPizza,
  removeIngredient,
  newPrice,
  orderObject,
} from './utils/yourPizza.js';

ingredientsPrice.forEach((obj, i) => addIngredients(obj, ingredients[i]));

const sumOfOrder = document.querySelector('.orderForm__price-new');

const allIngredients = document.querySelectorAll('.ingredients__elements>li');

allIngredients.forEach((el) => {
  el.addEventListener('click', () => {
    addYourIngredients('li', ingredientsYourPizza, el);
    percentResult(el, ingredientsPrice);
    sumOfOrder.innerHTML = newPrice(ingredientsPrice) + '$';
    switchButton();
  });
});

ingredientsYourPizza.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    let elYour = event.target;
    percentDeleteResult(elYour, ingredientsPrice);
    allIngredients.forEach((elOfAll) => {
      removeIngredient(elYour, elOfAll);
      sumOfOrder.innerHTML = newPrice(ingredientsPrice) + '$';
      switchButton();
    });
  }
});

btn.addEventListener('click', () => {
  console.log('Заказ: ', orderObject(ingredientsPrice));
  alert(`Ваш заказ готов. Стоимость пиццы: ${newPrice(ingredientsPrice)}$`);
});
