/* eslint no-restricted-syntax: off */

const { sum } = require('@playground/sum');
const { subtract } = require('@playground/subtract');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  const sumValue = sum(5, 5);
  const sumElement = document.getElementById('sum');
  sumElement.innerText = sumValue;

  const subtractValue = subtract(5, 5);
  const subtractElement = document.getElementById('subtract');
  subtractElement.innerText = subtractValue;
});
