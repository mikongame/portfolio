export function createPortfolioExperience() {
  const section = document.createElement('section');
  section.classList.add('portfolio-experience');
  section.id = 'portfolio-experience';

  // Heading with toggle inside
  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');

  const experienceBtn = document.createElement('button');
  experienceBtn.textContent = 'Experience';
  experienceBtn.classList.add('portfolio-toggle-btn', 'active');

  const separator = document.createTextNode(' / ');

  const educationBtn = document.createElement('button');
  educationBtn.textContent = 'Education';
  educationBtn.classList.add('portfolio-toggle-btn');

  heading.append(experienceBtn, separator, educationBtn);

  // Content container
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('portfolio-experience-content');

  const experiences = [
    {
      title: 'Mikon Insights – Consultant in Marketing & People Analytics',
      period: '2025 – Present'
    },
    {
      title: 'Apps Factory – Android App Developer',
      period: '2025 – Present'
    },
    {
      title: 'Rock{TheCode} – Full Stack Web Development',
      period: '2024 – 2025'
    },
    {
      title: 'Banco Sabadell – Data Scientist',
      period: '2021 – 2022'
    }
  ];

  const education = [
    {
      title: 'MSc in Data Science – UOC',
      period: '2022 – Present'
    },
    {
      title: 'Full Stack Dev – ThePower MBA + Apps Factory',
      period: '2024 – 2025'
    },
    {
      title: 'Data Analytics Bootcamp – Ironhack',
      period: '2019 – 2020'
    },
    {
      title: 'BSc in Psychology – UB / Universiteit van Amsterdam',
      period: '2014 – 2018'
    }
  ];

  const renderList = (items) => {
    contentContainer.innerHTML = '';
    const ul = document.createElement('ul');
    ul.classList.add('portfolio-experience-list');

    items.forEach(({ title, period }) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${title}</strong><br><span>${period}</span>`;
      ul.appendChild(li);
    });

    contentContainer.appendChild(ul);
  };

  // Initial view: Experience
  renderList(experiences);

  // Toggle logic
  experienceBtn.addEventListener('click', () => {
    experienceBtn.classList.add('active');
    educationBtn.classList.remove('active');
    renderList(experiences);
  });

  educationBtn.addEventListener('click', () => {
    educationBtn.classList.add('active');
    experienceBtn.classList.remove('active');
    renderList(education);
  });

  section.append(heading, contentContainer);
  return section;
}
