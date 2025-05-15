let number;
    do {
    number = prompt("Enter a number:");
    } 
    while (isNaN(number) || number.trim() === "" || number < 1);
    number = parseInt(number.trim(), 10);
            
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Number inputted: " + number;

let pattern = "";
    if (number % 2 === 1) {
    for (let i = number; i >= 1; i--) 
    {
    pattern += (Array(number).fill(i).join(" ") + "<br>"); }
    } else {
    for (let i = number; i >= 1; i--) {
    pattern += (Array(i).fill(i).join(" ") + "<br>");}
    }
    outputDiv.innerHTML += "<br>" + pattern;

let contacts = [];

function addContact() {
  const nameInput = document.getElementById("contactName");
  const name = nameInput.value.trim();

  if (name === "") return;

  if (contacts.length >= 7) {
    contacts.shift(); // remove first
  }
  contacts.push(name);
  nameInput.value = "";
  renderContacts();
}

function removeContact() {
  contacts.pop(); // remove last
  renderContacts();
}

function renderContacts() {
  document.getElementById("contactsList").textContent = contacts.join(", ");
}
