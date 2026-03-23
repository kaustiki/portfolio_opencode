const App = {
    init() {
        this.renderAbout();
        this.renderSkills();
        this.renderProjects();
        this.renderExperience();
        this.renderEducation();
        this.renderFineArts();
        this.renderCertifications();
        this.renderContact();
        this.bindNavigation();
        this.setYear();
    },
    
    renderAbout() {
        const data = window.portfolioData;
        if (!data) return;
        
        const summaryEl = document.getElementById('about-summary');
        const highlightsEl = document.getElementById('about-highlights');
        
        if (summaryEl) {
            summaryEl.textContent = data.info.summary;
        }
        
        if (highlightsEl) {
            highlightsEl.innerHTML = data.highlights
                .map(h => `<li>${h}</li>`)
                .join('');
        }
    },
    
    renderSkills() {
        const data = window.portfolioData;
        if (!data) return;
        
        const gridEl = document.getElementById('skills-grid');
        if (!gridEl) return;
        
        gridEl.innerHTML = Object.entries(data.skills)
            .map(([category, skills]) => `
                <div class="skills__category">
                    <h3>${category}</h3>
                    <ul class="skills__list">
                        ${skills.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
    },
    
    renderProjects() {
        const data = window.portfolioData;
        if (!data) return;
        
        const tabsEl = document.getElementById('projects-tabs');
        const gridEl = document.getElementById('projects-grid');
        
        const allTech = new Set();
        data.projects.forEach(p => p.tech.forEach(t => allTech.add(t)));
        const categories = ['All', ...Array.from(allTech)];
        
        if (tabsEl) {
            tabsEl.innerHTML = categories
                .map((cat, i) => `
                    <button class="projects__tab ${i === 0 ? 'projects__tab--active' : ''}" data-filter="${cat}">
                        ${cat}
                    </button>
                `).join('');
            
            tabsEl.querySelectorAll('.projects__tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    tabsEl.querySelectorAll('.projects__tab').forEach(t => t.classList.remove('projects__tab--active'));
                    e.target.classList.add('projects__tab--active');
                    this.filterProjects(e.target.dataset.filter);
                });
            });
        }
        
        this.filterProjects('All');
    },
    
    filterProjects(filter) {
        const data = window.portfolioData;
        if (!data) return;
        
        const gridEl = document.getElementById('projects-grid');
        if (!gridEl) return;
        
        const filtered = filter === 'All' 
            ? data.projects 
            : data.projects.filter(p => p.tech.includes(filter));
        
        gridEl.innerHTML = filtered
            .map(p => `
                <div class="projects__card">
                    <h3>${p.title}</h3>
                    <p class="projects__meta">${p.subtitle} | ${p.dates}</p>
                    <p class="projects__description">${p.description}</p>
                    <div class="projects__tech">
                        ${p.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
            `).join('');
    },
    
    renderExperience() {
        const data = window.portfolioData;
        if (!data) return;
        
        const timelineEl = document.getElementById('experience-timeline');
        if (!timelineEl) return;
        
        timelineEl.innerHTML = data.experience
            .map((exp, i) => `
                <div class="timeline__item">
                    <div class="timeline__entry">
                        <span class="timeline__marker">*</span>
                        ${i === 0 ? '<span class="timeline__head">HEAD</span>' : ''}
                        <span class="timeline__title">${exp.role}</span>
                    </div>
                    <div class="timeline__connector">
                        <span class="timeline__meta">${exp.company} | ${exp.dates}</span>
                    </div>
                    ${exp.details ? `
                        <div class="timeline__connector">
                            <ul class="timeline__details">
                                ${exp.details.map(d => `<li>${d}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${i < data.experience.length - 1 ? '<div class="timeline__spacer"></div>' : ''}
                </div>
            `).join('');
    },
    
    renderEducation() {
        const data = window.portfolioData;
        if (!data) return;
        
        const timelineEl = document.getElementById('education-timeline');
        if (!timelineEl) return;
        
        timelineEl.innerHTML = data.education
            .map((edu, i) => `
                <div class="timeline__item">
                    <div class="timeline__entry">
                        <span class="timeline__marker">*</span>
                        ${i === 0 ? '<span class="timeline__head">HEAD</span>' : ''}
                        <span class="timeline__title">${edu.degree}</span>
                    </div>
                    <div class="timeline__connector">
                        <span class="timeline__meta">${edu.institution} | ${edu.dates}${edu.cgpa ? ` | CGPA: ${edu.cgpa}` : ''}${edu.marks ? ` | Marks: ${edu.marks}` : ''}</span>
                    </div>
                    ${i < data.education.length - 1 ? '<div class="timeline__spacer"></div>' : ''}
                </div>
            `).join('');
    },
    
    renderFineArts() {
        const data = window.portfolioData;
        if (!data) return;
        
        const gridEl = document.getElementById('finearts-grid');
        if (!gridEl) return;
        
        gridEl.innerHTML = Object.entries(data.finearts)
            .map(([category, items]) => `
                <div class="finearts__category">
                    <h3>${category}</h3>
                    <ul>
                        ${items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
    },
    
    renderCertifications() {
        const data = window.portfolioData;
        if (!data) return;
        
        const gridEl = document.getElementById('certifications-grid');
        if (!gridEl) return;
        
        gridEl.innerHTML = data.certifications
            .map(cert => `
                <div class="certifications__card">
                    <h3>${cert.title}</h3>
                    <p class="certifications__issuer">${cert.issuer}</p>
                    <p class="certifications__dates">${cert.dates}</p>
                </div>
            `).join('');
    },
    
    renderContact() {
        const data = window.portfolioData;
        if (!data) return;
        
        const contentEl = document.getElementById('contact-content');
        if (!contentEl) return;
        
        contentEl.innerHTML = `
            <div class="contact__item">
                <span class="contact__label">Email</span>
                <a href="mailto:${data.contact.email}" class="contact__value">${data.contact.email}</a>
            </div>
            <div class="contact__item">
                <span class="contact__label">Phone</span>
                <span class="contact__value">${data.contact.phone}</span>
            </div>
            <div class="contact__item">
                <span class="contact__label">GitHub</span>
                <a href="https://${data.contact.github}" target="_blank" rel="noopener" class="contact__value">${data.contact.github}</a>
            </div>
            <div class="contact__item">
                <span class="contact__label">LinkedIn</span>
                <a href="https://${data.contact.linkedin}" target="_blank" rel="noopener" class="contact__value">${data.contact.linkedin}</a>
            </div>
            <div class="contact__item">
                <span class="contact__label">Address</span>
                <span class="contact__value">${data.contact.address}</span>
            </div>
        `;
    },
    
    bindNavigation() {
        const hamburger = document.querySelector('.nav__hamburger');
        const navLinks = document.querySelector('.nav__links');
        
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        }
    },
    
    setYear() {
        const yearEl = document.getElementById('year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
