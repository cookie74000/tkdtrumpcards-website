// ===== NAVIGATION =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// ===== TABS =====
function switchTab(tab) {
  document.querySelectorAll('.preview-tab').forEach((btn, i) => {
    const tabs = ['student','legend','cards'];
    btn.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.preview-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById(`panel-${tab}`);
  if (panel) panel.classList.add('active');
}

// ===== CALCULATOR =====
function updateCalc() {
  const slider = document.getElementById('student-slider');
  if (!slider) return;
  const students = parseInt(slider.value);
  const paying = Math.round(students * 0.6);
  const gross = paying * 2.99;
  const net = gross - 99.99;

  document.getElementById('calc-students').textContent = students;
  document.getElementById('calc-paying').textContent = paying;
  document.getElementById('calc-gross').textContent = '£' + gross.toFixed(2);
  document.getElementById('calc-net').textContent = net > 0 ? '£' + net.toFixed(2) : '−£' + Math.abs(net).toFixed(2);
  document.getElementById('calc-net').style.color = net > 0 ? 'var(--gold)' : '#f87171';
}

// ===== FAQ =====
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== FORM =====
function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const club = document.getElementById('form-club').value;

  const subject = encodeURIComponent(`TKD Trump Cards Licence Enquiry — ${club}`);
  const body = encodeURIComponent(`Hi,\n\nI'm interested in getting a TKD Trump Cards licence for my club.\n\nName: ${name}\nEmail: ${email}\nClub: ${club}\n\nPlease get in touch with next steps.\n\nThanks,\n${name}`);
  window.location.href = `mailto:hello@tkdtrumpcards.co.uk?subject=${subject}&body=${body}`;

  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
}

// ===== SCROLL ANIMATIONS =====
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateCalc();
  initAnimations();
  // Init legend buttons
  selectLegend('bruce');
});
