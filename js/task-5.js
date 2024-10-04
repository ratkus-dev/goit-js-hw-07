function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на кнопку і span
const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

// Додаємо обробник події для кліку на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону body
  document.body.style.backgroundColor = randomColor;

  // Відображаємо значення кольору в span.color
  colorDisplay.textContent = randomColor;
});
