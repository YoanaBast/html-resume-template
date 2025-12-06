const links = document.querySelectorAll('.nav-links a');
const contents = document.querySelectorAll('.tab-content');

// Optional: show the first tab by default
contents[0].classList.add('active');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');

    // Hide all content
    contents.forEach(c => c.classList.remove('active'));

    // Show the one that matches
    document.getElementById(targetId).classList.add('active');
  });
});
