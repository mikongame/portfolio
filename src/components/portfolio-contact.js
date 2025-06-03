export function createPortfolioContact() {
  const section = document.createElement('section');
  section.classList.add('portfolio-contact');
  section.id = 'portfolio-contact';

  const heading = document.createElement('h2');
  heading.classList.add('portfolio-section-title');
  heading.textContent = 'Let’s Talk';

  const form = document.createElement('form');
  form.classList.add('portfolio-contact-form');
  form.setAttribute('action', 'mailto:mikongame@gmail.com');
  form.setAttribute('method', 'post');
  form.setAttribute('enctype', 'text/plain');

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';
  nameInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Your Email';
  emailInput.required = true;

  const messageTextarea = document.createElement('textarea');
  messageTextarea.placeholder = 'Your Message';
  messageTextarea.required = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Send Message';

  form.append(nameInput, emailInput, messageTextarea, submitButton);

  const social = document.createElement('div');
  social.classList.add('portfolio-social');

  const email = document.createElement('a');
  email.href = 'mailto:mikongame@gmail.com';
  email.textContent = 'Email';

  const github = document.createElement('a');
  github.href = 'https://github.com/mikongame';
  github.target = '_blank';
  github.textContent = 'GitHub';

  const linkedin = document.createElement('a');
  linkedin.href = 'https://linkedin.com/in/mikongame';
  linkedin.target = '_blank';
  linkedin.textContent = 'LinkedIn';

  social.append(email, document.createTextNode(' | '), github, document.createTextNode(' | '), linkedin);

  section.append(heading, form, social);
  return section;
}
