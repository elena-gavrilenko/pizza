export function removeIngredient(elYour, elOfAll) {
  if (elYour.innerHTML === elOfAll.innerHTML) {
    elYour.remove();
    elOfAll.classList.remove('selected');
    elOfAll.classList.remove('changeColor');
    Array.from(elOfAll.parentElement.children).forEach((el) =>
      el.classList.remove('cancelClick')
    );
  }
}

export const ingredientsYourPizza = document.querySelector(
  '.orderForm__ingredientsYourPizza'
);

export function newPrice(arr) {
  let sum = 0;
  Array.from(ingredientsYourPizza.children).forEach((item) => {
    let price = item.innerHTML;
    arr.forEach((obj) => {
      if (Object.keys(obj).includes(price)) sum += obj[price];
    });
  });
  return sum;
}

export function orderObject(arr) {
  let order = {};
  order['Начинка'] = [];
  Array.from(ingredientsYourPizza.children).forEach((item) => {
    if (Object.keys(arr[0]).includes(item.innerHTML)) {
      order['Основа'] = item.innerHTML;
    } else if (Object.keys(arr[3]).includes(item.innerHTML)) {
      order['Соус'] = item.innerHTML;
    } else {
      order['Начинка'].push(item.innerHTML);
    }
  });

  return order;
}
