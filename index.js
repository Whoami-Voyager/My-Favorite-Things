const flyingElement = document.getElementById("Flying");
let isAnimating = false;

flyingElement.addEventListener("click", function() {
  if (!isAnimating) {
    isAnimating = true;
    flyingElement.classList.add("animated");

    setTimeout(() => {
      flyingElement.classList.remove("animated");
      isAnimating = false;
    }, 4000);
  }
});
