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
        { icon: 'bx bx-data', title: 'Database', details: 'MySQL' },
        { icon: 'bx bx-layer', title: 'Infrastructure as a Code', details: 'Terraform' },
        { icon: 'bx bx-wrench', title: 'Configuration Tools', details: 'Ansible' }
    ];

    const skillsTrack = document.getElementById('skillsTrack');
    const skillsPrev = document.getElementById('skillsPrev');
    const skillsNext = document.getElementById('skillsNext');
    const skillsDots = document.getElementById('skillsDots');

    let currentIndex = 0;
    let itemsPerView = getItemsPerView();

    // Determine items to show based on screen width
    function getItemsPerView() {
        const width = window.innerWidth;
        if (width < 480) return 1;
        if (width < 1024) return 2;
        return 3;
    }

    // Create skill cards
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class='${skill.icon}'></i>
            <h3>${skill.title}</h3>
            <p>${skill.details}</p>
        `;
        skillsTrack.appendChild(skillCard);
    });

    // Create dots
    const totalSlides = Math.ceil(skills.length / itemsPerView);
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        skillsDots.appendChild(dot);
    }

    // Update carousel position
    function updateCarousel() {
        const cardWidth = skillsTrack.querySelector('.skill-card').offsetWidth;
        const gap = 30;
        const offset = -currentIndex * (cardWidth + gap);
        skillsTrack.style.transform = `translateX(${offset}px)`;

        // Update dots
        document.querySelectorAll('#skillsDots .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === Math.floor(currentIndex / itemsPerView));
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index * itemsPerView;
        const maxIndex = skills.length - itemsPerView;
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        updateCarousel();
    }

    // Next button
    skillsNext.addEventListener('click', () => {
        const maxIndex = skills.length - itemsPerView;
        if (currentIndex < maxIndex) {
            currentIndex += itemsPerView;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Previous button
    skillsPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) currentIndex = 0;
        } else {
            const maxIndex = skills.length - itemsPerView;
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
            skillsDots.innerHTML = '';
            const newTotalSlides = Math.ceil(skills.length / itemsPerView);
            for (let i = 0; i < newTotalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.addEventListener('click', () => goToSlide(i));
                skillsDots.appendChild(dot);
            }
            
            updateCarousel();
        }
    });

    // Initial update
    setTimeout(updateCarousel, 100);
});


