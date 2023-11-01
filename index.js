const flyingElement = document.getElementById("Flying");

flyingElement.addEventListener("click", function() {
    flyingElement.style.transition = "top 5s, left 5s";

    flyingElement.style.top = "0";
    flyingElement.style.left = "0";
});
