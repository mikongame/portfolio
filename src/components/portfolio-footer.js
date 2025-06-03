export function createPortfolioFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('portfolio-footer');

  const text = document.createElement('p');
  text.classList.add('portfolio-footer-text');
  text.innerHTML = `© ${new Date().getFullYear()} Miguel García Melgar · Built with ❤️ using Vanilla JS & Vite`;

  footer.appendChild(text);
  return footer;
}
