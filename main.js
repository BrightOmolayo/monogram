document.querySelectorAll('.picture').forEach(div => {
  const button = div.querySelector('.shopbutton')
  //  button's class here
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseenter', () => button.style.backgroundColor = ' #1a2456')
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseenter', () => button.style.display = 'block')
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseleave', () => button.style.backgroundColor = 'transparent')
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseleave', () => button.style.display = 'none')
})

document.querySelectorAll('.picture').forEach(div => {
  const price = div.querySelector('.price-tag')
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseenter', () => price.style.display = 'none')
  // eslint-disable-next-line no-return-assign
  div.addEventListener('mouseleave', () => price.style.display = 'block')
})
