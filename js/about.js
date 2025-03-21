document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.3, // Trigger animation when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add "show" class to trigger animation
            }
        });
    }, observerOptions);

    // Observe each card
    document.querySelectorAll(".about-container div").forEach((el) => observer.observe(el));

    // Handle navbar click for "About" section
    const aboutNavLink = document.querySelector("a[href='#about']");
    aboutNavLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default jump behavior

        const aboutSection = document.querySelector("#about");
        aboutSection.scrollIntoView({ behavior: "smooth" });

        // Add animation classes when clicked
        setTimeout(() => {
            document.querySelector(".journey").classList.add("show");
            document.querySelector(".education").classList.add("show");
            document.querySelector(".hobbies").classList.add("show");
        }, 500); // Delay to allow smooth scrolling first
    });
});
