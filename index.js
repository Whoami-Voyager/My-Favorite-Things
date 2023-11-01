const flyingElement = document.getElementById("Flying");

flyingElement.addEventListener("click", function() {
  // Check if the animated class is already applied
  if (!flyingElement.classList.contains("animated")) {
    // Add the animated class to trigger the animation
    flyingElement.classList.add("animated");

    // Remove the animated class after the animation is complete
    setTimeout(() => {
      flyingElement.classList.remove("animated");
    }, 4); 
  }
});
