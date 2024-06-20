let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage += 2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
  } else if ((page = currentPage - 1)) {
    currentPage -= 2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const fireworkContainer = document.querySelector('.fireworks');

  const createFirework = () => {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.top = `${Math.random() * window.innerHeight}px`;
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    fireworkContainer.appendChild(firework);

    // Remove firework after animation ends
    firework.addEventListener('animationend', () => {
      firework.remove();
    });
  };

  // Create fireworks for 10 seconds
  const fireworkInterval = setInterval(createFirework, 200); // Create a new firework every 200ms

  setTimeout(() => {
    clearInterval(fireworkInterval);
  }, 10000); // Stop creating fireworks after 10 seconds
});
