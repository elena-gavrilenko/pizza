const completionsPercentage = document.querySelectorAll('.orderForm__part');

export function percentResult(elem, arr) {
  let name = elem.innerHTML;
  completionsPercentage.forEach((el, i) => {
    if (Object.keys(arr[i]).includes(name)) {
      el.classList.add('displayNone');
    }
  });
}

export function percentDeleteResult(elem, arr) {
  completionsPercentage.forEach((el, i) => {
    let a = Array.from(elem.parentElement.children).filter((el) =>
      Object.keys(arr[i]).includes(el.innerHTML)
    );

    if (a.includes(elem) && a.length < 2) {
      el.classList.remove('displayNone');
    }
  });
}

export const btn = document.querySelector('.orderForm__submit');
export function switchButton() {
  let sum = 0;
  completionsPercentage.forEach((el) => {
    if (el.classList.contains('displayNone')) {
      sum += 1;
    }
  });
  if (sum == 4 && btn.hasAttribute('disabled')) {
    btn.removeAttribute('disabled');
  } else if (sum !== 4 && !btn.hasAttribute('disabled')) {
    btn.disabled = true;
  }
}
