document.getElementById('terre-image').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien

    const fusee = document.querySelector('.fusee-image'); // Cibler l'image de la fusée
    const terre = document.getElementById('terre-image'); // Cibler l'image de la Terre

    // Obtenir les coordonnées de la Terre
    const terreRect = terre.getBoundingClientRect();
    const terreX = terreRect.left + (terreRect.width / 2); // Centre de la Terre
    const terreY = terreRect.top + (terreRect.height / 2); // Centre de la Terre

    // Calculer la position initiale de la fusée
    const fuseeRect = fusee.getBoundingClientRect();
    const fuseeX = fuseeRect.left + fuseeRect.width / 2; // Centre de la fusée
    const fuseeY = fuseeRect.top + fuseeRect.height / 2; // Centre de la fusée

    // Appliquer la position initiale de la fusée sans transition
    fusee.style.transition = "none"; // Désactiver la transition initiale

    // Positionner la fusée à sa position actuelle
    fusee.style.position = 'absolute';
    fusee.style.left = `${fuseeX - fuseeRect.width / 2}px`;
    fusee.style.top = `${fuseeY - fuseeRect.height / 2}px`;

    // Ajout d'un délai pour ne pas commencer l'animation immédiatement
    setTimeout(function() {
        // Maintenant, on active la transition
        fusee.style.transition = "left 2s ease, top 2s ease"; // Transition fluide
        fusee.style.left = `${terreX - fusee.offsetWidth / 2}px`; // Déplacer la fusée horizontalement
        fusee.style.top = `${terreY - fusee.offsetHeight / 2}px`; // Déplacer la fusée verticalement

        // Ouvre le lien après la durée de l'animation (2 secondes)
        setTimeout(function() {
            window.location.href = document.getElementById('terre-link').href;
        }, 2000); // 2000 ms = 2 secondes (durée de l'animation)
    }, 10); // Attendre un petit instant avant de lancer l'animation (10 ms)
});
