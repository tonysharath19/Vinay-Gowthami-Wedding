document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.querySelector('.heart-container');
    const magicText = document.querySelector('.magic-text');
    const introVideo = document.getElementById('intro-video');
    const body = document.body;

    heartContainer.addEventListener('click', function() {
        // Add glow effect
        heartContainer.classList.add('heart-glow');

        // After 4 seconds, fade out heart and text, then fade background after 2 more seconds, then show video after 1 more second
        setTimeout(function() {
            heartContainer.classList.add('fade-out');
            magicText.classList.add('fade-out');

            // After 2 seconds (total 6 seconds), fade background
            setTimeout(function() {
                body.classList.add('fade-background');

                // After 1 more second (total 7 seconds), show and play video
                setTimeout(function() {
                    introVideo.style.display = 'block';
                    introVideo.play();
                }, 1000);
            }, 2000);
        }, 4000);
    });
});
