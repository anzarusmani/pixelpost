const slider = document.querySelector('.slider');
        let isTransitioning = false;

        function nextSlide() {
            if (!isTransitioning) {
                isTransitioning = true;
                slider.style.transition = 'transform 0.8s ease-in-out';

                setTimeout(() => {
                    const firstSlide = document.querySelector('.slide');
                    slider.appendChild(firstSlide);
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                    isTransitioning = false;
                }, 800);
            }
        }

        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    