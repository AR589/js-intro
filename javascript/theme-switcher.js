// ============================================================
// Theme Switcher
// ============================================================
// Turns the background from black to white or vise-versa.

"use strict";

// Listen for clicks on the dark theme button
var darkThemeBtn = document.getElementById("dark-theme");
darkThemeBtn.addEventListener("click", changeTheme);

// Listen for clicks on the light theme button
var lightThemeBtn = document.getElementById("light-theme");
lightThemeBtn.addEventListener("click", changeTheme);

// Change the theme of the page
function changeTheme(event) {
  console.log("Changing the theme, boss!");

  // Store the body element as a variable
  var body = document.body;

  if (body.classList.contains("bg-white")) {
    // Remove the outgoing theme classes
    body.classList.remove("bg-white");
    body.classList.remove("black");
    // Add the incoming theme classes
    body.classList.add("bg-black");
    body.classList.add("white");
  } else {
    // Remove the outgoing theme classes
    body.classList.remove("bg-black");
    body.classList.remove("white");
    // Remove the outgoing theme classes
    body.classList.add("bg-white");
    body.classList.add("black");
  }

  // Prevent the default behavior of the a tag
  // We don't want this button to take us anywhere.
  event.preventDefault();
}
