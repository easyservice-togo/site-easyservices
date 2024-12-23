$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,           // Afficher 4 images à la fois
        loop: true,         // Le carrousel défile en boucle
        margin: 10,         // Marge entre les éléments
        autoplay: true,     // Activer l'auto-défilement
        autoplayTimeout: 2000, // Temps entre chaque défilement (en ms)
        autoplayHoverPause: true, // Pause sur survol
        responsive: {
            0: {
                items: 1  // Afficher 1 image sur mobile
            },
            600: {
                items: 2  // Afficher 2 images sur des écrans moyens
            },
            1000: {
                items: 4  // Afficher 4 images sur les écrans larges
            }
        }
    });
});