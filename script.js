const input = document.getElementById('item-input');
const form = document.getElementById('item-form');
const list = document.getElementById('item-list');
console.log(list);
// const items = document.querySelectorAll('li');
// console.log(items);
const filter = document.querySelector('#filter');

const displayTheItems = () => {
  const localstorageVar = getItemsFromLocalStorage();
  localstorageVar.forEach((item) => addItemToTheDOM(item));
  checkUI();
};
const onSubmit = (e) => {
  e.preventDefault();
  const item = input.value;

  if (item === '') {
    alert('Please enter the Item');
    return;
  }

  //runs addItemToTheDOM function which adds the item to the DOM
  addItemToTheDOM(item);

  // runs addItemToLocalStorage function which adds the item to the local storage
  addItemToLocalStorage(item);
  checkUI();
};

addItemToTheDOM = (item) => {
  const liist = document.createElement('li');
  liist.innerText = item;

  // if (item === '') {//////this will alert everytime the page is refreshed
  //   alert('Please enter the Item');
  //   return;
  // }

  const buttonn = f2('remove-item btn-link text-red');
  liist.appendChild(buttonn);
  console.log(liist);

  list.appendChild(liist);
};

addItemToLocalStorage = (item) => {
  const localstorageVar = getItemsFromLocalStorage();

  //add new item to array
  localstorageVar.push(item);

  //convert to json string and set to local storage
  localStorage.setItem('items', JSON.stringify(localstorageVar));
};

getItemsFromLocalStorage = () => {
  let localstorageVar;

  if (localStorage.getItem('items') === null) {
    localstorageVar = [];
  } else {
    localstorageVar = JSON.parse(localStorage.getItem('items'));
  }
  return localstorageVar;
};

///remove individual items(event delegation)
function itemRemove(e) {
  console.log(e.target.classList.contains('fa-xmark'));
  if (e.target.classList.contains('fa-xmark'))
    if (confirm('Are you Sure You want to delete this item?')) {
      e.target.classList.contains('fa-xmark')
        ? e.target.parentElement.parentElement.remove()
        : null;
    }
  checkUI();
}

const clearAll = document.querySelector('.btn-clear');
const clearAllItems = (e) => {
  if (e.target.classList.contains('btn-clear')) {
    list.innerHTML = ''; // Clear all items instead of removing the entire ul
    checkUI();
  }
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

//remove filter section and clear all button when no items

const checkUI = () => {
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
//filtering the items
const filterItems = (e) => {
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

function init() {
  //Event Listeners
  form.addEventListener('submit', onSubmit);
  list.addEventListener('click', itemRemove);
  clearAll.addEventListener('click', clearAllItems);
  filter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayTheItems);
}
init();
