function setProgress(percent) {
    const progress = document.querySelector('.progress');
    progress.style.width = percent + '%';
}

function animateProgressBar(progressElement) {
    const percent = progressElement.dataset.percent;
    progressElement.style.width = percent + '%';
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressElement = entry.target.querySelector('.progress');
        animateProgressBar(progressElement);
        observer.unobserve(entry.target);
      }
    });
  }

const progressBars = document.querySelectorAll('.progress-bar');
const observerOptions = {
root: null,
threshold: 0.5
};

const observer = new IntersectionObserver(handleIntersect, observerOptions);
progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});


function cliquemenu() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
}
function mudouTamanho() {
  if (window.innerWidth >= 768) {
      menu.style.display = 'block'
  }
  else {
      menu.style.display = 'none'
  }
}


