document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { icon: 'bx bx-buildings', title: 'CI/CD Tools', details: 'Jenkins, GitLab CI/CD, GitHub' },
        { icon: 'bx bx-desktop', title: 'Operating System', details: 'Linux (Red Hat), Windows' },
        { icon: 'bx bx-cloud', title: 'Cloud Platforms', details: 'AWS, GCP, OCI' },
        { icon: 'bx bx-cube', title: 'Containerization', details: 'Docker' },
        { icon: 'bx bx-git-branch', title: 'Version Control', details: 'GitLab, GitHub, Artifactory' },
        { icon: 'bx bx-chart', title: 'Monitoring & Logging', details: 'Kapacitor, Grafana' },
        { icon: 'bx bx-terminal', title: 'Scripting & Automation', details: 'Bash, Python, Shell' },
        { icon: 'bx bx-code-alt', title: 'Programming Languages', details: 'C, C++, Java' },
        { icon: 'bx bx-palette', title: 'Frontend Technologies', details: 'HTML, CSS, Angular, Vue' },
        { icon: 'bx bx-server', title: 'Backend Technologies', details: 'Spring Boot' },
        { icon: 'bx bx-data', title: 'Database', details: 'MySQL' }
    ];

    const skillsGrid = document.getElementById('skillsGrid');

    // Add skills dynamically
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <i class='${skill.icon}'></i>
            <h3>${skill.title}</h3>
            <p>${skill.details}</p>
        `;
        skillsGrid.appendChild(skillItem);
    });

    // Function to trigger animation
    function triggerAnimation() {
        document.querySelectorAll(".skill-item").forEach((el) => el.classList.add("reveal"));
    }

    // Intersection Observer for scroll-triggered animation
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3 // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                triggerAnimation();
            }
        });
    }, observerOptions);

    // Observe the skill section
    observer.observe(document.getElementById("skills"));

    // Smooth scroll and animation trigger when clicking "Skills" in navbar
    const skillsNavLink = document.querySelector("a[href='#skills']");
    if (skillsNavLink) {
        skillsNavLink.addEventListener("click", function (event) {
            event.preventDefault();

            const skillsSection = document.querySelector("#skills");
            skillsSection.scrollIntoView({ behavior: "smooth" });

            // Delay animation slightly after scrolling
            setTimeout(triggerAnimation, 500);
        });
    }
});

