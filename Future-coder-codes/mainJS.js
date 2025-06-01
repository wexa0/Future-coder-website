

var changeIcon = document.getElementById("changeIcon");

// Check if the user has a preference stored in local storage
var isDarkMode = localStorage.getItem("darkMode") === "true";

// Set the initial theme based on the stored preference
if (isDarkMode) {
    document.body.classList.add("dark-theme");
    changeIcon.src = "image/sun.png";
} else {
    document.body.classList.remove("dark-theme");
    changeIcon.src = "image/moon.png";
}

changeIcon.onclick = function () {
    // Toggle dark mode
    document.body.classList.toggle("dark-theme");

    // Update the moon/sun icon based on the current theme
    if (document.body.classList.contains("dark-theme")) {
        changeIcon.src = "image/sun.png";
    } else {
        changeIcon.src = "image/moon.png";
    }

    // Store the user's preference in local storage
    localStorage.setItem("darkMode", document.body.classList.contains("dark-theme"));
};
