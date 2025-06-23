function syncMinWidth() {
  const col1 = document.querySelector('.column.left');
  const col2 = document.querySelector('.column.right');
  if (col1 && col2) {
    const width = col1.getBoundingClientRect().width;
    col2.style.minWidth = width + 'px';
  }
}

// Run on load and on resize
window.addEventListener('load', syncMinWidth);
window.addEventListener('resize', syncMinWidth);
