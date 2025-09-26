// Greeting Message Based on Time
function showGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning 🌞";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  document.getElementById("greeting").textContent = greeting;
}

// Smooth Scroll for Navigation
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Run greeting on load
window.onload = showGreeting;
