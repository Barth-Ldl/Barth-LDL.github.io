const rocket = document.querySelector('.rocket');
const earth = document.querySelector('.earth');
const planets = document.querySelectorAll('.planet-link');

let isAnimating = false;

document.addEventListener('mousemove', (event) => {
  if (isAnimating) return; 

  const earthRect = earth.getBoundingClientRect();
  const mouseX = event.clientX - (earthRect.left) - earthRect.width / 2;
  const mouseY = event.clientY - earthRect.top - earthRect.height / 2;
  const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  rocket.style.transform = `translate(-50%, -50%) rotate(${angle + 45}deg)`;
});

planets.forEach(planetLink => {
  planetLink.addEventListener('click', (event) => {
    event.preventDefault();

    isAnimating = true;
    const planet = event.target.getBoundingClientRect();
    const planetX = planet.left + planet.width / 2;
    const planetY = planet.top + planet.height / 2;
    const planetRadius = planet.width / 2;
    
    const rocketRect = rocket.getBoundingClientRect();
    const rocketX = rocketRect.left + rocketRect.width / 2;
    const rocketY = rocketRect.top + rocketRect.height / 2;

    
    const deltaX = planetX - rocketX;
    const deltaY = planetY - rocketY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const speed = 0.01; 

    
    const angleToPlanet = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    
    let moveX = 0;
    let moveY = 0;
    let moveInterval = setInterval(() => {
      if (Math.abs(moveX) < Math.abs(deltaX) && Math.abs(moveY) < Math.abs(deltaY)) {
        moveX += deltaX * speed;
        moveY += deltaY * speed;

        
        rocket.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) rotate(${angleToPlanet + 45}deg)`;
      } else {
        clearInterval(moveInterval);

        
        let landingY = moveY + 10;
        let landingInterval = setInterval(() => {
          if (Math.abs(moveY - landingY) > 1) {
            moveY += (landingY - moveY) * 0.1; 
            rocket.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px) rotate(${angleToPlanet + 45}deg)`;
          } else {
            clearInterval(landingInterval);
            window.location.href = planetLink.href; 
            isAnimating = false; 
          }
        }, 10);
      }
    }, 10);
  });
});
