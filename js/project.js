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

    const projectsTrack = document.getElementById('projectsTrack');
    const projectsPrev = document.getElementById('projectsPrev');
    const projectsNext = document.getElementById('projectsNext');
    const projectsDots = document.getElementById('projectsDots');

    let currentIndex = 0;
    let itemsPerView = getItemsPerView();

    // Determine items to show based on screen width
    function getItemsPerView() {
        const width = window.innerWidth;
        if (width < 480) return 1;
        if (width < 1024) return 1;
        return 2;
    }

    // Create project cards
    projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.className = "carousel-project-card";

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="carousel-project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="carousel-tech-stack">
                    ${project.techStack.map(tech => {
                        const [icon, label] = tech.split('|');
                        return `<div><i class='${icon}'></i> ${label}</div>`;
                    }).join('')}
                </div>
            </div>
        `;

        projectsTrack.appendChild(card);
    });

    // Create dots
    const totalSlides = Math.ceil(projects.length / itemsPerView);
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        projectsDots.appendChild(dot);
    }

    // Update carousel position
    function updateCarousel() {
        const cardWidth = projectsTrack.querySelector('.carousel-project-card').offsetWidth;
        const gap = 30;
        const offset = -currentIndex * (cardWidth + gap);
        projectsTrack.style.transform = `translateX(${offset}px)`;

        // Update dots
        document.querySelectorAll('#projectsDots .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === Math.floor(currentIndex / itemsPerView));
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index * itemsPerView;
        const maxIndex = projects.length - itemsPerView;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        updateCarousel();
    }

    // Next button
    projectsNext.addEventListener('click', () => {
        const maxIndex = projects.length - itemsPerView;
        if (currentIndex < maxIndex) {
            currentIndex += itemsPerView;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Previous button
    projectsPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) currentIndex = 0;
        } else {
            const maxIndex = projects.length - itemsPerView;
            currentIndex = maxIndex;
        }
        updateCarousel();
    });

    // Update on window resize
    window.addEventListener('resize', () => {
        const newItemsPerView = getItemsPerView();
        if (newItemsPerView !== itemsPerView) {
            itemsPerView = newItemsPerView;
            currentIndex = 0;
            
            // Recreate dots
            projectsDots.innerHTML = '';
            const newTotalSlides = Math.ceil(projects.length / itemsPerView);
            for (let i = 0; i < newTotalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => goToSlide(i));
                projectsDots.appendChild(dot);
            }
            
            updateCarousel();
        }
    });

    // Initial update
    setTimeout(updateCarousel, 100);
});
