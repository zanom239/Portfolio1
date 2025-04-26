// Smooth Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Small animation on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.home h1').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.home h1').style.transition = 'opacity 2s';
        document.querySelector('.home h1').style.opacity = 1;
    }, 500);
});
