// Sélection de toutes les petites planètes
const smallPlanets = document.querySelectorAll('.small-planet');
const infoContainer = document.querySelector('.info-container');
const planetTitle = document.createElement('h2'); // Crée un titre
const planetImage = document.createElement('img'); // Crée une image
const planetDescription = document.createElement('p'); // Crée un paragraphe pour la description
const additionalText = document.createElement('p'); // Crée un autre paragraphe pour le texte après l'image

// Ajout d'un événement de clic à chaque planète
smallPlanets.forEach(planet => {
    planet.addEventListener('click', () => {
        // Récupère l'ID de la planète et affiche les informations associées
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
            titleText = "Basket";
            infoText = "Depuis plus de 10ans je pratique le basket en club. J'ai commencé à Lardenne puis fini au TOAC en régional. Cette année j'ai quitté mon club et la FFBB (Fédération française de basket-ball) pour rejoindre le basket Universitaire avec l'IUT de Blagnanc";
            imageSrc = "image/basket.jpg"; // Remplacez par l'image que vous souhaitez afficher
            afterImageText = "Depuis 3ans j'arbitre des matchs de basket départementale et régional en FFBB. Cette année je suis devenue arbitre FFSU (université). J'adore arbitrer des matchs de basket, je prend autant de plaisir à arbitrer qu'a jouer";

        } else if (planetId == '2') {
            titleText = "Informatique";
            infoText = "l'informatique me passionne énormément. Grâce à elle on peut matérialiser notre imagination. J'aime créer, développer, chercher, comprendre etc... J'aimerais en faire mon métier";
            imageSrc = "image/informatique.jpg"; // Remplacez par l'image que vous souhaitez afficher
            afterImageText = "Je m'aitrise quelques langages de programmations. Cela m'a permis de créer des petits jeux ou des petits logiciels";

        } else if (planetId == '3') {
            titleText = "Toulouse Football Club";
            infoText = "Je suis un grand fan du TFC, je suis abbonné au club depuis plus de 13ans. Grâce à lui, j'ai eu l'opportunité de vivre des expériences incroyables et de voyager à travers l'Europe, notamment à Liverpool, au Stade de France, à Lisbonne, et bien d'autres endroits.";
            imageSrc = "image/Tifo.jpg"; // Remplacez par l'image que vous souhaitez afficher
            afterImageText = "Je suis membre des Indians Tolosa, les ultras du TFC. Avec mon groupe, nous créons des tifos et animons le stade durant les matchs. Les tifos sont des créations visuelles qui renforcent l'ambiance en plus des chants puissants et fédérateurs qui soutiennet notre équipe et enflamment le stade.";
        }

        // Mettre à jour le titre, le texte, l'image et le texte après l'image
        planetTitle.textContent = titleText;
        planetDescription.textContent = infoText;
        planetImage.src = imageSrc;
        planetImage.alt = titleText; // Mettre un texte alternatif pour l'image
        additionalText.textContent = afterImageText;

        // Ajouter les éléments au container d'informations
        infoContainer.innerHTML = ''; // Efface tout contenu précédent
        infoContainer.appendChild(planetTitle);
        infoContainer.appendChild(planetDescription);
        infoContainer.appendChild(planetImage);
        infoContainer.appendChild(additionalText); // Ajout du texte après l'image

        // Afficher le container d'informations
        document.body.classList.add('show-info');

        // Ajouter la classe pour déclencher l'animation du décalage de la scène
        document.body.classList.add('shift-left');
    });
});
