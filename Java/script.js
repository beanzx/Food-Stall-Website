document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById('navigation'); // First navigation bar
    const foodNav = document.getElementById('foodnav'); // Second navigation bar
    const stickyOffset = nav.offsetTop; // Top position of the first nav
    const foodNavOffset = foodNav.offsetTop; // Top position of the second nav

    function toggleStickyNav() {
        // Calculate the point where the first nav should stop sticking
        const stopStickyOffset = foodNavOffset - nav.offsetHeight;

        // Sticky behavior for the first navigation bar
        if (window.pageYOffset >= stickyOffset && window.pageYOffset < stopStickyOffset) {
            nav.classList.add('sticky');
            foodNav.classList.remove('sticky');
        } else if (window.pageYOffset >= stopStickyOffset) {
            nav.classList.remove('sticky');
            foodNav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
            foodNav.classList.remove('sticky');
        }
    }

    window.onscroll = function () {
        toggleStickyNav();
    };
});