document.addEventListener('click', (event) => {
  if (event.target.matches('.box')) {
    event.target.innerText = "O";
  }
});