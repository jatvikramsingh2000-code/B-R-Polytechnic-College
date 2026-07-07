const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const contactForm = document.querySelector('.contact-form');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const noticeForm = document.getElementById('noticeForm');
const noticeList = document.getElementById('noticeList');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

if (contactForm && !loginForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    if (button) {
      button.textContent = 'Message Sent';
      button.disabled = true;
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUser')?.value || '';
    const password = document.getElementById('loginPass')?.value || '';

    if (username && password) {
      loginMessage.textContent = `Welcome ${username}! You are now signed in.`;
      loginMessage.style.color = '#0f4c81';
    } else {
      loginMessage.textContent = 'Please enter both username and password.';
      loginMessage.style.color = '#b91c1c';
    }
  });
}

if (noticeForm && noticeList) {
  noticeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('noticeTitle')?.value || 'Untitled notice';
    const detail = document.getElementById('noticeDetail')?.value || 'No details provided.';

    const item = document.createElement('div');
    item.className = 'notice-item';
    item.innerHTML = `<h3>${title}</h3><p>${detail}</p>`;
    noticeList.prepend(item);
    noticeForm.reset();
  });
}
