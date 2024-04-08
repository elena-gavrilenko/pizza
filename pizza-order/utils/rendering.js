export function createElement(el) {
  return document.createElement(el);
}

export function addIngredients(obj, elem) {
  const arr = Object.keys(obj);

  return arr.forEach((el) => {
    const li = createElement('li');
    li.textContent = el;
    elem.append(li);
  });
}
