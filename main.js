const rocket = document.querySelector('.rocket');
const earth = document.querySelector('.earth');
const planets = document.querySelectorAll('.planet-link');

let isAnimating = false;

document.addEventListener('mousemove', (event) => {
  if (isAnimating) return; // Empêche le mouvement de la souris si l'animation est en cours

  const earthRect = earth.getBoundingClientRect();
  const mouseX = event.clientX - (earthRect.left) - earthRect.width / 2;
  const mouseY = event.clientY - earthRect.top - earthRect.height / 2;
  const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  rocket.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
});

// Animation de la fusée vers la planète
planets.forEach(planetLink => {
  planetLink.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la redirection immédiate

    isAnimating = true; // Indique que l'animation commence
    const planet = event.target.getBoundingClientRect();
    const planetX = planet.left + planet.width / 2;
    const planetY = planet.top + planet.height / 2;
    const planetRadius = planet.width / 2; // Le rayon de la planète pour ajuster la position de la fusée

    // Calculer la position de la fusée
    const rocketRect = rocket.getBoundingClientRect();
    const rocketX = rocketRect.left + rocketRect.width / 2;
    const rocketY = rocketRect.top + rocketRect.height / 2;

    // Calculer le déplacement nécessaire
    const deltaX = planetX - rocketX;
    const deltaY = planetY - rocketY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const speed = 0.01; // Diminuer la vitesse pour rendre l'animation plus lente

    // Calculer l'angle de la fusée vers la planète
    const angleToPlanet = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Animation du déplacement de la fusée
    let moveX = 0;
    let moveY = 0;
    let moveInterval = setInterval(() => {
      if (Math.abs(moveX) < Math.abs(deltaX) && Math.abs(moveY) < Math.abs(deltaY)) {
        moveX += deltaX * speed;
        moveY += deltaY * speed;

        // Mettre à jour la transformation de la fusée (déplacement + rotation)
        rocket.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) rotate(${angleToPlanet + 45}deg)`;
      } else {
        clearInterval(moveInterval);

        // Ajout d'une animation pour poser la fusée sur la surface de la planète
        let landingY = moveY + 10; // Position juste au-dessus de la planète
        let landingInterval = setInterval(() => {
          if (Math.abs(moveY - landingY) > 1) {
            moveY += (landingY - moveY) * 0.1; // Rapprochement progressif
            rocket.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) rotate(${angleToPlanet + 45}deg)`;
          } else {
            clearInterval(landingInterval);
            window.location.href = planetLink.href; // Rediriger après l'animation
            isAnimating = false; // L'animation est terminée
          }
        }, 10);
      }
    }, 10);
  });
});
