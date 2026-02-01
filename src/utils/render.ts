import type { UserProfile, Project, Experience, Certification, Education } from '../data/profile';

export const renderHeader = (profile: UserProfile): string => `
  <div class="container">
    <div style="font-weight: bold; font-size: 1.25rem; color: var(--color-primary);">
      ${profile.name} <span style="color: var(--color-accent);">| ${profile.title}</span>
    </div>
    <nav>
      <ul style="display: flex; gap: var(--spacing-sm);">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
`;

export const renderHero = (profile: UserProfile): string => `
  <div class="container">
    <div class="grid-2" style="align-items: center;">
      <div>
        <h1 style="font-size: var(--font-size-h1); color: var(--color-primary); margin-bottom: var(--spacing-xs);">${profile.name}</h1>
        <h2 style="font-size: var(--font-size-h3); color: var(--color-secondary); margin-bottom: var(--spacing-sm);">${profile.title}</h2>
        <p style="font-size: 1.1rem; color: var(--color-text-light); margin-bottom: var(--spacing-md);">${profile.tagline}</p>
        <div style="display: flex; gap: var(--spacing-sm);">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="/assets/documents/resume.pdf" target="_blank" class="btn btn-secondary">Download Resume</a>
        </div>
      </div>
      <div style="text-align: center;">
        <img src="${profile.avatarUrl}" alt="${profile.name}" style="width: 250px; height: 250px; border-radius: 50%; object-fit: cover; border: 4px solid var(--color-surface); box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
      </div>
    </div>
  </div>
`;

export const renderAbout = (profile: UserProfile): string => `
  <div class="container">
    <h2 style="margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--color-accent); display: inline-block;">About Me</h2>
    <div class="grid-2">
      <div>
        ${profile.about.map(p => `<p style="margin-bottom: 1rem;">${p}</p>`).join('')}
      </div>
      <div>
        <h3 style="margin-bottom: var(--spacing-sm);">Skills</h3>
        <div style="margin-bottom: var(--spacing-sm);">
          <strong>Technical:</strong><br>
          ${profile.skills.technical.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
         <div style="margin-bottom: var(--spacing-sm);">
          <strong>Software:</strong><br>
          ${profile.skills.software.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
         <div>
          <strong>Soft Skills:</strong><br>
          ${profile.skills.soft.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  </div>
`;

export const renderExperience = (experience: Experience[]): string => `
  <div class="container">
     <h2 style="margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--color-accent); display: inline-block;">Work Experience</h2>
     <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
        ${experience.map(exp => `
          <div style="background: white; padding: var(--spacing-sm); border-left: 4px solid var(--color-primary);">
            <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
              <h3 style="color: var(--color-primary);">${exp.role}</h3>
              <span style="color: var(--color-text-light); font-weight: bold;">${exp.startDate} - ${exp.endDate}</span>
            </div>
            <div style="color: var(--color-secondary); margin-bottom: var(--spacing-xs);">${exp.company} | ${exp.location}</div>
            <ul>
              ${exp.description.map(desc => `<li style="margin-left: 1.5rem; list-style-type: disc;">${desc}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
     </div>
  </div>
`;

export const renderProjects = (projects: Project[]): string => `
  <div class="container">
    <h2 style="margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--color-accent); display: inline-block;">Projects</h2>
    <div class="grid-3">
      ${projects.map(proj => `
        <div class="card">
          <img src="${proj.imageUrl}" alt="${proj.title}" class="card-image">
          <div class="card-content">
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-accent); font-weight: bold;">${proj.category}</span>
            <h3 style="margin: 0.5rem 0; font-size: 1.25rem;">${proj.title}</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-light); margin-bottom: 1rem;">${proj.description}</p>
            <div style="margin-bottom: 1rem;">
               ${proj.technologies.slice(0, 3).map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            ${proj.pdfUrl ? `<button class="btn btn-sm btn-secondary view-pdf-btn" data-pdf="${proj.pdfUrl}" data-title="${proj.title}">View Drawing (PDF)</button>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

export const renderEducationAndCerts = (education: Education[], certs: Certification[]): string => `
  <div class="container">
    <div class="grid-2">
      <div>
        <h2 style="margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--color-accent); display: inline-block;">Education</h2>
        ${education.map(edu => `
          <div style="margin-bottom: var(--spacing-sm);">
            <h3 style="font-size: 1.1rem;">${edu.degree}</h3>
            <div style="color: var(--color-text-light);">${edu.institution}, ${edu.year}</div>
          </div>
        `).join('')}
      </div>
      <div>
         <h2 style="margin-bottom: var(--spacing-md); border-bottom: 2px solid var(--color-accent); display: inline-block;">Certifications</h2>
         <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${certs.map(cert => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem; border: 1px solid var(--color-border); border-radius: 4px;">
                <div>
                  <div style="font-weight: bold;">${cert.title}</div>
                  <div style="font-size: 0.85rem; color: var(--color-text-light);">${cert.issuer} (${cert.date})</div>
                </div>
                ${cert.pdfUrl ? `<button class="btn btn-sm btn-secondary view-pdf-btn" data-pdf="${cert.pdfUrl}" data-title="${cert.title}">View</button>` : ''}
              </div>
            `).join('')}
         </div>
      </div>
    </div>
  </div>
`;

export const renderFooter = (profile: UserProfile): string => `
  <div class="container" style="text-align: center; color: white;">
    <h2 style="margin-bottom: var(--spacing-sm);">Get In Touch</h2>
    <div style="display: flex; gap: var(--spacing-md); justify-content: center; margin-bottom: var(--spacing-md);">
      <a href="mailto:${profile.email}" style="display: flex; align-items: center; gap: 0.5rem;">
        <span>${profile.email}</span>
      </a>
      <a href="${profile.linkedin}" target="_blank">LinkedIn</a>
    </div>
    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7);">
      &copy; ${new Date().getFullYear()} ${profile.name}. All rights reserved.
    </div>
  </div>
`;
