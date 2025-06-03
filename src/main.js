import './style/portfolio-style.css';
import { createPortfolioHeader } from './components/portfolio-header.js';
import { createPortfolioHero } from './components/portfolio-hero.js';
import { createPortfolioAbout } from './components/portfolio-about.js';
import { createPortfolioSkills } from './components/portfolio-skills.js';
import { createPortfolioExperience } from './components/portfolio-experience.js';
import { createPortfolioProjects } from './components/portfolio-projects.js';
import { createPortfolioContact } from './components/portfolio-contact.js';
import { createPortfolioFooter } from './components/portfolio-footer.js';

const app = document.querySelector('#app');

app.append(
  createPortfolioHeader(),
  createPortfolioHero(),
  createPortfolioAbout(),
  createPortfolioSkills(),
  createPortfolioExperience(),
  createPortfolioProjects(),
  createPortfolioContact(),
  createPortfolioFooter()
);
