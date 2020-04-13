const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleMoneyBtn = document.getElementById('double_money');
const showMillionairBtn = document.getElementById('show_mollionaires');
const sortBtn = document.getElementById('sort');
const calculatWealthBtn = document.getElementById('calculate_wealth');


const data = [];

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
}
