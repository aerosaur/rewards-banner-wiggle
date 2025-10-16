// Random jiggle animation for the rewards icon
(function() {
    function triggerJiggle() {
        const icon = document.querySelector('.rewards-email-sub-banner__image');
        if (!icon) return;

        // Add the jiggle class
        icon.classList.add('jiggle');

        // Remove it after animation completes
        setTimeout(() => {
            icon.classList.remove('jiggle');
        }, 500);
    }

    function scheduleNextJiggle() {
        // Random interval between 2 and 5 seconds
        const minDelay = 2000;
        const maxDelay = 5000;
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

        setTimeout(() => {
            triggerJiggle();
            scheduleNextJiggle(); // Schedule the next one
        }, randomDelay);
    }

    // Start after page loads, with initial random delay
    window.addEventListener('load', () => {
        const initialDelay = Math.random() * 3000 + 1000; // 1-4 seconds
        setTimeout(() => {
            triggerJiggle();
            scheduleNextJiggle();
        }, initialDelay);
    });
})();

// Proximity-based hover for the CTA button
(function() {
    const button = document.querySelector('.rewards-email-sub-banner__cta-button');
    if (!button) return;

    // Don't run on touch devices
    if (('ontouchstart' in window) || navigator.maxTouchPoints > 0) return;

    // Respect reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    // Proximity radii with hysteresis
    const enterRadius = 70;  // px - when cursor enters this distance, trigger animation
    const leaveRadius = 100; // px - when cursor leaves past this, deactivate

    let isProximal = false;
    let raf = null;

    function setProximal(on) {
        if (on === isProximal) return;
        isProximal = on;

        if (on) {
            button.classList.add('proximal');
        } else {
            button.classList.remove('proximal');
        }
    }

    function onMove(e) {
        const rect = button.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Use hysteresis: only enter when within enterRadius, leave when beyond leaveRadius
        if (!isProximal && dist <= enterRadius) {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => setProximal(true));
        } else if (isProximal && dist > leaveRadius) {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => setProximal(false));
        }
    }

    function onLeave() {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => setProximal(false));
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('blur', onLeave);
    document.addEventListener('touchstart', onLeave, { passive: true });

    // Keyboard users: show proximal on focus
    button.addEventListener('focus', () => setProximal(true));
    button.addEventListener('blur', () => setProximal(false));
})();
