const MAX_NUMBER = 15;
const MIN_NMUBER = -5;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]');
const subract = document.querySelector('[data-key="subract"]');
const add = document.querySelector('[data-key="add"]');

const subtractionhandler = () => {
  const newvalue = parseInt(number.value) - STEP_AMOUNT;
  number.value = newvalue;

  if (add.disabled === true) {
    add.disabled = false;
  }

  if (newvalue <= MIN_NMUBER) {
    subract.disabled = true;
  }
};
const addhandler = () => {
  const newvalue = parseInt(number.value) + STEP_AMOUNT;
  number.value = newvalue;

  if (subract.disabled === true) {
    subract.disabled = false;
  }

  if (newvalue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

subract.addEventListener("click", subtractionhandler);
add.addEventListener("click", addhandler);
