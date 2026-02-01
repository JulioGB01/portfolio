import './styles/main.css';
import { profileData } from './data/profile';
import {
  renderHeader,
  renderHero,
  renderAbout,
  renderExperience,
  renderProjects,
  renderEducationAndCerts,
  renderFooter
} from './utils/render';

document.addEventListener('DOMContentLoaded', () => {
  // Render Sections
  const app = {
    header: document.getElementById('header'),
    hero: document.getElementById('hero'),
    about: document.getElementById('about'),
    experience: document.getElementById('experience'),
    projects: document.getElementById('projects'),
    education: document.getElementById('education'),
    contact: document.getElementById('contact'),
  };

  if (app.header) app.header.innerHTML = renderHeader(profileData);
  if (app.hero) app.hero.innerHTML = renderHero(profileData);
  if (app.about) app.about.innerHTML = renderAbout(profileData);
  if (app.experience) app.experience.innerHTML = renderExperience(profileData.experience);
  if (app.projects) app.projects.innerHTML = renderProjects(profileData.projects);
  if (app.education) app.education.innerHTML = renderEducationAndCerts(profileData.education, profileData.certifications);
  if (app.contact) app.contact.innerHTML = renderFooter(profileData);

  // PDF Modal Logic
  const modal = document.getElementById('pdf-modal');
  const modalBody = document.getElementById('modal-body');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.getElementById('modal-close');

  const openModal = (url: string, title: string) => {
    if (!modal || !modalBody || !modalTitle) return;

    modalTitle.textContent = title;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Check if mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      modalBody.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
          <p style="margin-bottom: 1rem;">PDF display is optimized for desktop.</p>
          <a href="${url}" target="_blank" class="btn btn-primary">Download/Open PDF</a>
        </div>
      `;
    } else {
      modalBody.innerHTML = `<object data="${url}" type="application/pdf" width="100%" height="100%">
        <p>Your browser does not support PDFs. <a href="${url}">Download the PDF</a>.</p>
      </object>`;
    }
  };

  const closeModal = () => {
    if (!modal || !modalBody) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modalBody.innerHTML = ''; // Clear content to stop playing or loading
  };

  // Event Delegation for View PDF buttons
  document.body.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.matches('.view-pdf-btn')) {
      const url = target.getAttribute('data-pdf');
      const title = target.getAttribute('data-title');
      if (url) openModal(url, title || 'Document');
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Close on outside click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
