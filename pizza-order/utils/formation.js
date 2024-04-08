import { createElement } from './rendering.js';

function changeMarker(elem) {
  elem.classList.add('selected');
  elem.classList.add('changeColor');
}
function cancelClickElem(elem) {
  elem.classList.add('cancelClick');
}

function cancelClick(elem) {
  Array.from(elem.parentElement.children).forEach((el) =>
    el.classList.add('cancelClick')
  );
}

export function addYourIngredients(tag, parents, el) {
  let parent = el.parentElement;

  let selected = Array.from(parent.children).filter((el) =>
    el.classList.contains('selected')
  );
  if (
    ((parent.classList.contains('base') ||
      parent.classList.contains('sauce')) &&
      selected.length < 1) ||
    ((parent.classList.contains('ingredient1') ||
      parent.classList.contains('ingredient2')) &&
      selected.length < 2)
  ) {
    let tagCreate = createElement(tag);
    tagCreate.textContent = el.textContent;
    parents.append(tagCreate);
    changeMarker(el);
    cancelClickElem(el);
  } else {
    cancelClick(el);
  }
}
