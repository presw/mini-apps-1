// Event Listeners

document.addEventListener('click', (event) => {
  if (event.target.matches('.box')) {
    toggle.call(event);
  }

});