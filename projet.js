const smallPlanets = document.querySelectorAll('.small-planet');
const infoContainer = document.querySelector('.info-container');
const planetTitle = document.createElement('h2');
const planetImage = document.createElement('img');
const planetDescription = document.createElement('p');
const additionalText = document.createElement('p');

smallPlanets.forEach(planet => {
    planet.addEventListener('click', () => {
        const planetId = planet.getAttribute('data-id');

        if (planetId == '4') {
            window.location.href = 'main.html';
            return;
        }
        
        let infoText = '';
        let imageSrc = '';
        let titleText = '';
        let afterImageText = '';

        if (planetId == '1') {
            titleText = "BlackJack";
            infoText = "Un de mes premiers projets en informatique a été la création d'un BlackJack avec interface graphique, animation, image, etc... Dans ce jeu, on affrontait l'ordinateur.";
            imageSrc = "image/blackjack-screen.png";
            afterImageText = "J'ai codé le BlackJack en Python sur Sublime Text (IDE). J'ai utilisé la bibliothèque graphique tkinter pour faire l'interface du jeu.";
        } else if (planetId == '2') {
            titleText = "RayCasting";
            infoText = "Mon dernier projet en date (et le plus gros) est un jeu en raycasting multijoueur où 2 joueurs s'affrontent dans une arène avec des armes. Le raycasting est une technique de création d'environnement 3D uniquement via des lignes de code (sans moteur).";
            imageSrc = "image/raycasting.png";
            afterImageText = "J'ai fait ce projet en Python, j'ai utilisé la bibliothèque PyGame et Socket pour la partie multijoueur.";
        } else if (planetId == '3') {
            titleText = "Site Web Toulouse";
            infoText = "Il y a 4 ans, je me suis lancé dans la création d'un site internet qui présentait la ville de Toulouse. J'y parle de son histoire, de ses activités, de son sport, etc.";
            imageSrc = "image/Toulouse.png";
            afterImageText = "Ce projet a été fait en HTML et CSS.";
        }

        planetTitle.textContent = titleText;
        planetDescription.textContent = infoText;
        planetImage.src = imageSrc;
        planetImage.alt = titleText;
        additionalText.textContent = afterImageText;

        infoContainer.innerHTML = '';
        infoContainer.appendChild(planetTitle);
        infoContainer.appendChild(planetDescription);
        infoContainer.appendChild(planetImage);
        infoContainer.appendChild(additionalText);

        document.body.classList.add('show-info');
        document.body.classList.add('shift-left');
    });
});
