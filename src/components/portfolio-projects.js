export function createPortfolioProjects() {
  const section = document.createElement('section');
  section.classList.add('portfolio-projects');
  section.id = 'portfolio-projects';

  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');
  heading.textContent = 'Projects';

  const grid = document.createElement('div');
  grid.classList.add('portfolio-project-grid');

  const projects = [
    {
      title: 'MBTI Personality Classifier',
      description: 'NLP model that predicts Myers-Briggs personality type from text. Built in Python using scikit-learn and NLTK.',
      link: 'https://github.com/mikongame/NLP-to-predict-Myers-Briggs-Personality-Type'
    },
    {
      title: 'Churn Prediction (Case Study)',
      description: 'Customer churn modeling project using classification algorithms and SHAP for explainability.',
      link: 'https://mikoninsights.es/?case=churn'
    },
    {
      title: 'Talent Attrition Analysis',
      description: 'People Analytics case study focused on employee retention. Combines business insights and ML.',
      link: 'https://mikoninsights.es/?case=attrition'
    },
    {
      title: 'Mikon Insights Website',
      description: 'Business site built with HTML, CSS and JS to present data projects, services and brand.',
      link: 'https://mikoninsights.es'
    },
    {
      title: 'Pinterest Clone',
      description: 'Frontend layout built with HTML, CSS and JavaScript using Unsplash API and component-based structure.',
      link: 'https://cloningpinterest.netlify.app/' // o el deploy si lo tienes
    },
    {
      title: 'Tic Tac Toe + Monte Carlo AI',
      description: 'Tic Tac Toe game with CPU opponent and optional AI using Monte Carlo Tree Search in JavaScript.',
      link: 'https://montecarlotictactoe.netlify.app/' // cámbialo si tienes otra URL
    }
  ];

  projects.forEach(({ title, description, link }) => {
    const card = document.createElement('div');
    card.classList.add('portfolio-project-card');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = description;

    const projectLink = document.createElement('a');
    projectLink.href = link;
    projectLink.target = '_blank';
    projectLink.textContent = 'View Project';
    projectLink.classList.add('cta-btn');

    card.append(projectTitle, projectDesc, projectLink);
    grid.appendChild(card);
  });

  section.append(heading, grid);
  return section;
}