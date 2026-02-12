// Intersection Observer for scroll-triggered fade-in animations
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.fade-in-section');

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  // Copy buttons
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'COPIED';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'COPY';
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });
});
