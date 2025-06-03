export function createPortfolioHeader() {
  const header = document.createElement('header');
  header.classList.add('portfolio-header');

  const nav = document.createElement('nav');
  nav.classList.add('portfolio-nav');

  const title = document.createElement('h1');
  title.classList.add('portfolio-logo');
  title.textContent = 'Miguel G. Melgar';

  const links = document.createElement('ul');
  links.classList.add('portfolio-nav-links');

  const sections = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
  sections.forEach((section) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#portfolio-${section.toLowerCase()}`;
    a.textContent = section;
    a.classList.add('portfolio-nav-link');
    li.appendChild(a);
    links.appendChild(li);
  });

  nav.append(title, links);
  header.appendChild(nav);
  return header;
}
