const input = document.getElementById('item-input');
const form = document.getElementById('item-form');
const list = document.getElementById('item-list');

f1 = (e) => {
  e.preventDefault();
  const liist = document.createElement('li');
  liist.innerText = input.value;

  if (input.value === '') {
    alert('Please enter the Item');
  }

  const buttonn = f2('remove-item btn-link text-red');
  liist.appendChild(buttonn);
  console.log(liist);

  list.appendChild(liist);
};
const f2 = (classes) => {
  const buttonnn = document.createElement('button');
  buttonnn.className = classes;
  const iconnn = f3('fa-solid fa-xmark');
  buttonnn.appendChild(iconnn);
  return buttonnn;
};
const f3 = (classes) => {
  const iconn = document.createElement('i');
  iconn.className = classes;
  return iconn;
};

form.addEventListener('submit', f1);

///remove individual items(event delegation)
list.addEventListener('click', (e) => {
  e.target.classList.contains('fa-xmark')
    ? e.target.parentElement.parentElement.remove()
    : null;
  // console.log(e.currentTarget);
});

const clearAll = document.querySelector('.btn-clear');
clearAll.addEventListener('click', (e) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  //or
  // e.target.classList.contains('btn-clear')
  // ? document.querySelector('ul').remove() // or list.innerHTML = ''
  // : null;
});
