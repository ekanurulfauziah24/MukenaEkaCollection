// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle?.addEventListener('click', () => {
  const ul = mainNav.querySelector('ul');
  if (!ul) return;
  ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // on small screens close nav
      const ul = mainNav.querySelector('ul');
      if(window.innerWidth <= 880 && ul) ul.style.display = 'none';
    }
  });
});
