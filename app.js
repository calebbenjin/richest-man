const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleMoneyBtn = document.getElementById('double_money');
const showMillionairBtn = document.getElementById('show_millionair');
const sortBtn = document.getElementById('sort');
const calculatWealthBtn = document.getElementById('calculate_wealth');


let data = [];



// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  
  // desturing out the name data from the api
  const {first, last} = data.results[0].name
  // creating a new obj to display to the dom
  const newUser = {
    name: `${first} ${last}`,
    money: Math.floor(Math.random() * 1000000)
  }
  // passing the new obj to a function that will push it to the data array
  addData(newUser);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDom();
}

// Double money
function doubleMoney() {
  data = data.map(user => {
    return {...user, money: user.money * 2 }
  });
  updateDom();
}

// Sort by richest
function sortByRichest() {
  data = data.sort((a, b) => b.money - a.money);
  updateDom();
}

// Filter Millionars
function showMillionairs() {
  data = data.filter(user => {
    return user.money > 1000000
  })
  updateDom();
}

// Update DOM
function updateDom(providedData = data) {
  // clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(person => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(person.money)}`;
    main.appendChild(element);
  });
}

// Format number as money 
function formatMoney(number) {
  return '$'+ number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};


// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairBtn.addEventListener('click', showMillionairs);

