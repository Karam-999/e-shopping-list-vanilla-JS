const input = document.getElementById('item-input');
const form = document.getElementById('item-form');
const list = document.getElementById('item-list');
console.log(list);
// const items = document.querySelectorAll('li');
// console.log(items);
const filter = document.querySelector('#filter');

f1 = (e) => {
  e.preventDefault();
  const liist = document.createElement('li');
  liist.innerText = input.value;

  if (input.value === '') {
    alert('Please enter the Item');
    return;
  }

  const buttonn = f2('remove-item btn-link text-red');
  liist.appendChild(buttonn);
  console.log(liist);

  list.appendChild(liist);
  checkUI();
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
  if (confirm('Are you Sure You want to delete this item?')) {
    e.target.classList.contains('fa-xmark')
      ? e.target.parentElement.parentElement.remove()
      : null;
  }
  checkUI();
});

const clearAll = document.querySelector('.btn-clear');
clearAll.addEventListener('click', (e) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  checkUI();
  //or
  // e.target.classList.contains('btn-clear')
  // ? document.querySelector('ul').remove() // or list.innerHTML = ''
  // : null;
});

//remove filter section and clear all button when no items

checkUI = () => {
  // const list = document.getElementById('item-list');
  if (list.childElementCount === 0) {
    clearAll.style.display = 'none';
    filter.style.display = 'none';
  } else {
    clearAll.style.display = 'block';
    filter.style.display = 'block';
  }
};
checkUI();
console.log('hi');
const filter1 = (e) => {
  const items = list.querySelectorAll('li'); //works only if the items is defined here and not outside the function because it is a dynamic list
  const text = e.target.value.toLowerCase();
  items.forEach((li) => {
    const itemName = li.textContent.toLowerCase();
    console.log(itemName);
    if (itemName.indexOf(text) != -1) {
      //indexOf returns -1 if the text is not found
      console.log(true);
      li.style.display = 'flex';
    } else {
      console.log(false);
      li.style.display = 'none';
    }
  });
};

filter.addEventListener('input', filter1);
