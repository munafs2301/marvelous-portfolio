import './style.css';

const savedTheme = localStorage.getItem('theme');
document.documentElement.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';

const experience = [
  {
    role: 'Senior Full-Stack Software Engineer',
    company: 'AXXESS (Cavista)',
    location: 'Dallas, Texas, USA',
    dates: 'June 2022 - Present',
    type: 'Remote',
    points: [
      'Lead 20+ successful production releases with zero-downtime deployments.',
      'Delivered features that drove a 50% improvement in customer satisfaction.',
      'Built a .NET invoicing system with automated calculations and lifecycle tracking.',
      'Improved observability and operational efficiency by 50% through automation.'
    ]
  },
  {
    role: 'Frontend Engineer (Contract)',
    company: 'Flashboord',
    location: 'Lagos, Nigeria',
    dates: 'January 2024 - September 2025',
    type: 'Remote',
    points: [
      'Built scalable, reusable React.js components aligned with Figma design systems.',
      'Redesigned core user journeys including auth, dashboards, and maps.'
    ]
  },
  {
    role: 'Backend Engineer',
    company: 'TeamApt',
    location: 'Lagos, Nigeria',
    dates: 'August 2021 - April 2022',
    type: 'Remote',
    points: [
      'Optimized backend APIs, reducing payment processing time by 12% in high-volume fintech.',
      'Helped build a scalable payment gateway handling peak transaction loads.'
    ]
  },
  {
    role: '.NET Software Engineer',
    company: 'Genesys Tech Hub',
    location: 'Enugu, Nigeria',
    dates: 'August 2020 - August 2021',
    type: 'On-site',
    points: [
      'Built and deployed web apps with ASP.NET MVC 5, Web API, Angular, and SQL Server.',
      'Designed RESTful APIs that increased development efficiency by 25%.'
    ]
  }
];

const skillGroups = [
  ['Languages & frameworks', ['C#', '.NET Core', '.NET Framework', 'ASP.NET MVC', 'ASP.NET Web API', 'JavaScript', 'TypeScript', 'Python', 'React.js', 'Vue.js', 'Angular', 'Aurelia', 'HTML5', 'CSS3', 'Bootstrap']],
  ['Architecture & backend', ['RESTful API Design', 'Entity Framework', 'Dependency Injection (IoC)', 'Microservices', 'Auth & Authorization Patterns']],
  ['Databases', ['Microsoft SQL Server', 'MySQL', 'Query Optimization', 'Schema Design']],
  ['DevOps & cloud', ['Docker', 'GitHub Actions', 'Azure DevOps', 'CI/CD Pipelines', 'Azure (AZ-900)', 'Power Automate']],
  ['Testing & delivery', ['xUnit', 'Unit & Integration Testing', 'Sentry', 'Kibana', 'Swagger', 'Postman', 'Agile (Scrum & Kanban)', 'Code Reviews']]
];

const projects = [
  { icon: '01', title: 'Enterprise invoicing system', text: 'A .NET-based invoicing platform with automated calculations, invoice generation, lifecycle tracking, and client notifications for mission-critical healthcare workflows at Axxess.', tags: ['.NET Core', 'SQL Server', 'Web API'] },
  { icon: '02', title: 'Payment gateway optimization', text: 'Contributed to a scalable payment gateway at TeamApt, optimizing backend APIs to cut payment processing time by 12% under high-volume fintech loads.', tags: ['C#', 'REST APIs', 'Fintech'] },
  { icon: '03', title: 'Recruitment & archiving platform', text: 'A job recruitment and document archiving web platform at Genesys Tech Hub, with reusable RESTful APIs that boosted development efficiency by 25%.', tags: ['ASP.NET MVC', 'Angular', 'SQL Server'] },
  { icon: '04', title: 'Dashboard & maps redesign', text: 'Redesigned core user journeys including authentication, dashboards, and maps with scalable React.js components built from Figma design systems.', tags: ['React.js', 'TypeScript', 'Figma'] }
];

const app = document.querySelector('#app');

const renderList = (items, className, renderItem) => items.map((item) => renderItem(item)).join('');

app.innerHTML = `
  <div class="site-shell">
    <header class="topbar">
      <a class="brand" href="#top" aria-label="Frank Solomon Marvelous home"><span>FSM</span><i></i></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><b class="sr-only">Toggle navigation</b></button>
      <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#work">Work</a><a href="#contact" class="nav-cta">Let's talk <span>↗</span></a><button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch to dark mode"><span class="theme-icon" aria-hidden="true">☾</span></button>
      </nav>
    </header>

    <main id="top">
      <section class="hero page-section">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span class="status-dot"></span> Available for select opportunities</p>
          <h1>Building digital products that <em>hold up</em> under pressure.</h1>
          <p class="hero-summary">I'm Frank Solomon Marvelous, a senior software engineer who turns complex product and business problems into secure, scalable systems.</p>
          <div class="hero-actions"><a class="button button-primary" href="#work">Explore my work <span>↗</span></a><a class="text-link" href="mailto:franksolomonmarvelous@gmail.com">Start a conversation <span>→</span></a></div>
        </div>
        <div class="hero-aside reveal"><div class="orbital"><span>FS</span><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div></div><p>Full-stack engineer<br /><strong>Based in Lagos, Nigeria</strong></p></div>
        <div class="scroll-cue"><span>Scroll to explore</span><i></i></div>
      </section>

      <section id="about" class="page-section split-section reveal"><div class="section-label">01 <span>About</span></div><div class="section-content about-copy"><p class="lead">I care about the details that make software feel inevitable: thoughtful architecture, clear interfaces, reliable delivery, and teams that enjoy building together.</p><p>I currently work remotely at <strong>Axxess (Cavista)</strong> in Dallas, where I build enterprise healthcare applications. Before that, I optimized payment infrastructure at TeamApt and built recruitment platforms at Genesys Tech Hub.</p><p>My toolkit spans <strong>.NET, cloud-native architecture, and modern JavaScript frameworks</strong>. My approach is grounded in clean architecture, test-driven development, continuous delivery, and a healthy amount of curiosity.</p><div class="facts"><span><b>5+</b> years experience</span><span><b>4.39/5.0</b> engineering GPA</span></div></div></section>

      <section id="experience" class="page-section split-section reveal"><div class="section-label">02 <span>Experience</span></div><div class="section-content timeline">${renderList(experience, 'experience', (job) => `<article class="timeline-item"><div class="timeline-meta"><span>${job.dates}</span><span>${job.type}</span></div><h3>${job.role}</h3><p class="company">${job.company} <span>- ${job.location}</span></p><ul>${job.points.map((point) => `<li>${point}</li>`).join('')}</ul></article>`)}</div></section>

      <section id="skills" class="page-section split-section reveal"><div class="section-label">03 <span>Capabilities</span></div><div class="section-content skills-layout">${skillGroups.map(([title, skills]) => `<div class="skill-group"><h3>${title}</h3><div class="skill-list">${skills.map((skill) => `<span>${skill}</span>`).join('')}</div></div>`).join('')}</div></section>

      <section id="work" class="page-section work-section reveal"><div class="section-heading"><div class="section-label">04 <span>Selected work</span></div><p>Systems I've helped shape, scale, and ship.</p></div><div class="projects-grid">${projects.map((project) => `<article class="project-card"><div class="project-index">${project.icon}</div><h3>${project.title}</h3><p>${project.text}</p><div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div></article>`).join('')}</div></section>

      <section id="contact" class="contact-section page-section reveal"><div class="section-label">05 <span>Contact</span></div><div><h2>Have a complex problem?<br /><em>Let's make it simpler.</em></h2><p>Whether you have a project idea, a role to discuss, or just want to connect, my inbox is open.</p><a class="button button-primary" href="mailto:franksolomonmarvelous@gmail.com">franksolomonmarvelous@gmail.com <span>↗</span></a></div></section>
    </main>
    <footer><span>© <span id="year"></span> Frank Solomon Marvelous</span><span>Designed & built with intention</span><span><a href="https://www.linkedin.com/in/marvelous-frank-solomon-189362109/" target="_blank" rel="noreferrer">LinkedIn ↗</a> &nbsp; <a href="tel:+2349036417646">+234 903 641 7646</a></span></footer>
  </div>
`;

document.querySelector('#year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

const updateThemeToggle = () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const nextMode = isDark ? 'light' : 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${nextMode} mode`);
  themeToggle.setAttribute('title', `Switch to ${nextMode} mode`);
  themeIcon.textContent = isDark ? '☼' : '☾';
};

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeToggle();
});
updateThemeToggle();

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
});
nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
