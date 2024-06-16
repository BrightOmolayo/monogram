document.querySelectorAll('.picture').forEach(div => {
  const button = div.querySelector('.shopbutton')
  //  button's class here
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseenter', () => button.style.backgroundColor = 'blue')
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseleave', () => button.style.backgroundColor = 'transparent')
})
