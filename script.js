// Initialize Lucide Icons
lucide.createIcons();

// --- DATA CONFIGURATION ---

const EXPERIENCE = [
    {
        role: "Digital Marketing Manager",
        company: "Arts of Finance",
        period: "Aug 2024 – Dec 2025",
        description: [
            "Strategic advisor to stakeholders for performance marketing solutions.",
            "Increased lead conversion rates by 40% through multi-channel strategies.",
            "Optimized budgets driving 35% improvement in ROI.",
            "Grew organic traffic by 60% through SEO content frameworks."
        ]
    },
    {
        role: "Performance Marketing Intern",
        company: "Regalia Marketing",
        period: "Apr 2024 – Jun 2024",
        description: [
            "Implemented data-led advertising campaigns for key client accounts.",
            "Improved conversion performance by 30% through audience refinement.",
            "Reduced CPL by 18% via bid optimization and testing."
        ]
    },
    {
        role: "Social Media Manager Intern",
        company: "Hive Ads Media",
        period: "Dec 2023 – Feb 2024",
        description: [
            "Led social engagement strategies achieving 80% growth.",
            "Reduced acquisition costs by 22% through performance analysis.",
            "Experimented with high-converting creative formats."
        ]
    },
    {
        role: "Founder & Digital Strategist",
        company: "Instastrategix",
        period: "2019 – 2022",
        description: [
            "Built and scaled digital platforms focusing on audience monetization.",
            "Scaled organic traffic by 50% and revenue by 30% via SEO.",
            "Grew subscriber base to 10,000+ active users."
        ]
    }
];

const CERTIFICATIONS = [
    { title: "Google Ads – Measurement", issuer: "Google", link: "https://skillshop.credential.net/8b999e3c-6c52-463c-9e87-e639b58b9653" },
    { title: "AI-Powered Shopping Ads", issuer: "Google", link: "https://skillshop.credential.net/c7860ceb-fac8-4434-af65-4f491d8af9c4" },
    { title: "HubSpot Digital Marketing", issuer: "HubSpot", link: "https://app.hubspot.com/academy/achievements/w24zndhh/en/1/abhishek-choubey/digital-marketing" },
    { title: "Semrush SEO & Advertising", issuer: "Semrush", link: "https://static.semrush.com/academy/certificates/4d327ee07f/abhishek-choubey_25.pdf" }
];

// --- CORE FUNCTIONALITY ---

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const htmlElement = document.documentElement;

const setInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    }
};

const toggleTheme = () => {
    const isDark = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);
setInitialTheme();

// Sticky Navigation Scroll Logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.classList.add('glass', 'shadow-xl', 'py-3');
        navbar.classList.remove('py-5');
    } else {
        navbar.classList.remove('glass', 'shadow-xl', 'py-3');
        navbar.classList.add('py-5');
    }
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.maxHeight = menuOpen ? '500px' : '0';
    menuToggle.innerHTML = menuOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

// Close mobile menu on click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.maxHeight = '0';
        menuOpen = false;
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});

// --- CONTENT INJECTION ---

const renderExperience = () => {
    const container = document.getElementById('experience-container');
    EXPERIENCE.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = "lg:col-span-12 group timeline-item relative pl-10 border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0";
        item.innerHTML = `
            <div class="experience-dot bg-blue-600 border-4 border-white dark:border-slate-950 shadow-lg group-hover:bg-blue-500"></div>
            <div class="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                    <span class="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest">${exp.period}</span>
                    <h3 class="text-2xl font-black text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 transition-colors">${exp.role}</h3>
                    <p class="text-lg font-bold text-slate-500 dark:text-slate-400">${exp.company}</p>
                </div>
            </div>
            <ul class="space-y-3 max-w-4xl">
                ${exp.description.map(desc => `
                    <li class="flex items-start text-slate-600 dark:text-slate-400 leading-relaxed">
                        <i data-lucide="chevron-right" class="w-5 h-5 text-blue-500 shrink-0 mt-0.5 mr-2"></i>
                        ${desc}
                    </li>
                `).join('')}
            </ul>
        `;
        container.appendChild(item);
    });
};

const renderCertifications = () => {
    const container = document.getElementById('certifications-list');
    CERTIFICATIONS.forEach(cert => {
        const card = document.createElement('a');
        card.href = cert.link;
        card.target = "_blank";
        card.className = "group flex flex-col p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all hover:shadow-2xl hover:-translate-y-1";
        card.innerHTML = `
            <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i data-lucide="award" class="w-6 h-6"></i>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white mb-2 leading-tight">${cert.title}</h4>
            <p class="text-sm text-slate-500 mb-6 font-medium">${cert.issuer}</p>
            <div class="mt-auto flex items-center text-[10px] font-black uppercase tracking-widest text-blue-600">
                Verify Credential <i data-lucide="external-link" class="ml-2 w-3 h-3"></i>
            </div>
        `;
        container.appendChild(card);
    });
};

// Start Render
renderExperience();
renderCertifications();

// Re-initialize icons for dynamic content
lucide.createIcons();
