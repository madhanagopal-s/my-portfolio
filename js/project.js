document.addEventListener("DOMContentLoaded", () => {
const projects = [
    {
        image: "assests/img/oci.webp",
        title: "Cloud Infrastructure Migration to OCI",
        description: "Led the migration of PCP servers from on-premises infrastructure to Oracle Cloud Infrastructure (OCI), coordinating across teams to ensure minimal downtime.",
        timeAgo: "1 year ago",
        techStack: ["bx bxl-oracle|OCI", "bx bxl-docker|Docker", "bx bxl-linux|Linux"]
    },
    {
        image: "assests/img/pipelines.webp",
        title: "End-to-End CI/CD Pipeline Implementation",
        description: "Designed and deployed CI/CD pipelines for multiple projects using Jenkins and GitLab CI/CD, automating build, test, and deployment processes.",
        timeAgo: "8 months ago",
        techStack: ["bx bxl-jenkins|Jenkins", "bx bxl-gitlab|GitLab CI/CD", "bx bxl-docker|Docker"]
    },
    {
        image: "assests/img/alerts.webp",
        title: "Proactive Monitoring and Alerting System",
        description: "Set up a comprehensive monitoring and alerting system using Kapacitor and Grafana, enabling real-time tracking of server metrics and application performance.",
        timeAgo: "6 months ago",
        techStack: ["bx bxl-grafana|Grafana", "bx bx-alarm|Kapacitor", "bx bxl-influxdb|InfluxDB"]
    },
    {
        image: "assests/img/server_managemnet.webp",
        title: "Multi-Environment Server Management",
        description: "Configured and maintained Linux and Windows servers across development, staging, and production environments, ensuring high availability and security.",
        timeAgo: "2 months ago",
        techStack: ["bx bxl-windows|Windows", "bx bxl-linux|Linux"]
    },
    {
        image: "assests/img/project.webp",
        title: "Custom Calendar App with Angular & MySQL",
        description: "Built an interactive calendar app to allocate team members, with data persistence through MySQL and a Spring Boot backend, featuring dynamic date highlighting and form validation.",
        timeAgo: "3 months ago",
        techStack: ["bx bxl-angular|Angular", "bx bxl-spring-boot|Spring Boot", "bx bxl-mysql|MySQL"]
    },
    {
        image: "assests/img/portfolio.webp",
        title: "Personal Portfolio Website",
        description: "Created a sleek, responsive portfolio website using Vue.js and Tailwind CSS, showcasing projects, skills, and a contact form with email notifications.",
        timeAgo: "2 months ago",
        techStack: ["bx bxl-vuejs|Vue.js", "bx bxl-css|CSS", "bx bx-envelope|EmailJS"]
    }

];

const projectContainer = document.getElementById("projectContainer");

    projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "project-card";

        // Alternate animation classes (right for odd row, left for even row)
        card.dataset.animate = index % 2 === 0 ? "right" : "left";

        card.innerHTML = `
            <div class="project-header">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => {
                        const [icon, label] = tech.split('|');
                        return `<div><i class='${icon}'></i> ${label}</div>`;
                    }).join('')}
                </div>
            </div>
        `;

        projectContainer.appendChild(card);
    });

    // Function to trigger animations when the section is in viewport
    function handleScroll() {
        const projectCards = document.querySelectorAll(".project-card");
        const projectSection = document.getElementById("projects");
        const sectionPosition = projectSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight - 100) {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add(card.dataset.animate === "right" ? "animate-right" : "animate-left");
                }, index * 200); // Stagger animation effect
            });

            // Remove event listener after animation runs
            window.removeEventListener("scroll", handleScroll);
        }
    }

    // Run animation on page load
    handleScroll();

    // Listen for scroll events to trigger animations
    window.addEventListener("scroll", handleScroll);
});