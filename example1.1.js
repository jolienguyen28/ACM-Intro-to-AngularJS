// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initial array of users with their names and balances
  var users = [
      { "name": "Priscilla Smith", "balance": 1191 },
      { "name": "Jimmy Verde", "balance": 1923 },
      { "name": "Hugo Chang", "balance": 1289 }
  ];

  // Function to render the user list
  function renderUsers() {
    
      // Get the user list container element
      var userList = document.getElementById("userList");
      // Clear the current list content
      userList.innerHTML = "";

      // Iterate over each user in the array
      users.forEach(function(user, index) {
          // Create a new list item element
          var li = document.createElement("li");
          // Set the text content of the list item
          li.textContent = user.name + ": $" + user.balance;
          li.classList.add("user-item");

          // Create a "Remove" button
          var removeButton = document.createElement("button");
          removeButton.textContent = "Remove";

          // Add a click event listener to the "Remove" button
          removeButton.addEventListener("click", function() {
              removeUser(index); // Call the removeUser function with the current index
          });

          // Append the "Remove" button to the list item
          li.appendChild(removeButton);
          // Append the list item to the user list container
          userList.appendChild(li);
      });
  }

  // Function to remove a user from the list
  function removeUser(index) {
      // Remove the user at the specified index
      users.splice(index, 1);
      // Re-render the user list
      renderUsers();
  }

  // Initial rendering of the user list
  renderUsers();
});
