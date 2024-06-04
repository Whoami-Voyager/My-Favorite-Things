const flyingElement = document.getElementById("Flying");
const flyingElement2 = document.getElementById("Flying-2");
const flyingElement3 = document.getElementById("Flying-3");

const drivingElement = document.getElementById("Drive");
const drivingElement2 = document.getElementById("Drive-2");

let isAnimatingFlying = false;
let isAnimatingDriving = false;

flyingElement.addEventListener("click", function () {
    if (!isAnimatingFlying) {
        isAnimatingFlying = true;
        flyingElement.classList.add("animated-flying");

        setTimeout(() => {
            flyingElement.classList.remove("animated-flying");
            isAnimatingFlying = false;
        }, 6000);
    }
});

flyingElement2.addEventListener("click", function () {
    if (!isAnimatingFlying) {
        isAnimatingFlying = true;
        flyingElement2.classList.add("animated-flying");

        setTimeout(() => {
            flyingElement2.classList.remove("animated-flying");
            isAnimatingFlying = false;
        }, 6000);
    }
});

flyingElement3.addEventListener("click", function () {
    if (!isAnimatingFlying) {
        isAnimatingFlying = true;
        flyingElement3.classList.add("animated-flying");

        setTimeout(() => {
            isAnimatingFlying = false;
        }, 6000);
    }
});

drivingElement.addEventListener("click", function () {
    if (!isAnimatingDriving) {
        isAnimatingDriving = true;
        drivingElement.classList.add("animated-driving");

        setTimeout(() => {
            drivingElement.classList.remove("animated-driving");
            isAnimatingDriving = false;
        }, 3000);
    }
});

drivingElement2.addEventListener("click", function () {
    if (!isAnimatingDriving) {
        isAnimatingDriving = true;
        drivingElement2.classList.add("animated-driving");

        setTimeout(() => {
            drivingElement2.classList.remove("animated-driving");
            isAnimatingDriving = false;
        }, 3000);
    }
});
