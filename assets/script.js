let giftButton = document.querySelector("#giftButton");

giftButton.addEventListener("mouseover", function (e) {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let newX = Math.random() * (windowWidth - giftButton.offsetWidth);
  let newY = Math.random() * (windowHeight - giftButton.offsetHeight);

  giftButton.style.left = `${newX}px`;
  giftButton.style.top = `${newY}px`;
});
