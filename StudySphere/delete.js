// Step 1: Get the data from localStorage
let users = JSON.parse(localStorage.getItem("users"));

// Step 2: Check if users exist and key 1 is present
if (users[1] === null) {
  users.splice(1, 1); // remove one element at index 1
}

localStorage.setItem("users", JSON.stringify(users));
