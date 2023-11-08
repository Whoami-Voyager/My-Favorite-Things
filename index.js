const flyingElement = document.getElementById("Flying");
const drivingElement = document.getElementById("Drive");
let isAnimatingFlying = false;
let isAnimatingDriving = false;

flyingElement.addEventListener("click", function() {
    if (!isAnimatingFlying) {
        isAnimatingFlying = true;
        flyingElement.classList.add("animated-flying");

        setTimeout(() => {
            flyingElement.classList.remove("animated-flying");
            isAnimatingFlying = false;
        }, 4000);
    }
});

drivingElement.addEventListener("click", function() {
    if (!isAnimatingDriving) {
        isAnimatingDriving = true;
        drivingElement.classList.add("animated-driving");

        setTimeout(() => {
            drivingElement.classList.remove("animated-driving");
            isAnimatingDriving = false;
        }, 3000);
    }
});
