function syncMinWidth() {
  const col1 = document.querySelector('.column:first-child');
  const col2 = document.querySelector('.column:last-child');
  if (col1 && col2) {
    const width = col1.getBoundingClientRect().width;
    col2.style.minWidth = width + 'px';
  }
}

// Run on load and on window resize
window.addEventListener('load', syncMinWidth);
window.addEventListener('resize', syncMinWidth);
