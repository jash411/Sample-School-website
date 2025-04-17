// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
const speed = 200;

function animateCounters() {
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.innerText;
        const increment = target / speed;
        
        if(count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            stat.innerText = target;
        }
    });
}

// Intersection Observer for counter animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.5});

document.querySelector('.mission-stats').style.opacity = '0';
observer.observe(document.querySelector('.mission-stats'));

// Gallery slider
const galleryTrack = document.querySelector('.gallery-track');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');
let currentIndex = 0;
const itemWidth = galleryItems[0].offsetWidth + 30; // width + margin

function updateGallery() {
    galleryTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (galleryItems.length - 2);
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + (galleryItems.length - 2)) % (galleryItems.length - 2);
    updateGallery();
});

// Auto-scroll gallery
let autoScroll = setInterval(() => {
    currentIndex = (currentIndex + 1) % (galleryItems.length - 2);
    updateGallery();
}, 5000);

// Pause auto-scroll on hover
galleryTrack.addEventListener('mouseenter', () => {
    clearInterval(autoScroll);
});

galleryTrack.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        currentIndex = (currentIndex + 1) % (galleryItems.length - 2);
        updateGallery();
    }, 5000);
});

// Fade in mission stats when visible
const missionStats = document.querySelector('.mission-stats');
const missionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            missionStats.style.opacity = '1';
            missionStats.style.transition = 'opacity 1s ease';
        }
    });
});

missionObserver.observe(missionStats);