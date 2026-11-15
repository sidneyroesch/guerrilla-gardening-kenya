// Hämta knappen och navigationen så att jag kan styra mobilmenyn.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

// När användaren klickar på menyknappen öppnas eller stängs menyn.
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
});


// Här sparar jag information om växterna som ska visas på sidan.
// Genom att ha informationen i en array kan JavaScript skapa korten åt mig.
const plants = [
    {
        name: "Hibiscus",
        description: "Colourful flowers that attract pollinators.",
        image: "images/hibiscus.jpg",
        alt: "Red Hibiscus flower."
    },
    {
        name: "Moringa",
        description: "A versatile plant valued for its nutritious leaves.",
        image: "images/moringa.jpg",
        alt: "Moringa flower."
    },
    {
        name: "Spider Plant",
        description: "An easy-growing plant with long, graceful leaves.",
        image: "images/spider-plant.jpg",
        alt: "Spider plant."
    },
    {
        name: "Aloe Vera",
        description: "A hardy plant known for its useful and soothing properties.",
        image: "images/aloe-vera.jpg",
        alt: "Aloe Vera plant."
    },
    {
        name: "African Wormwood",
        description: "A hardy African plant that grows well in warm conditions.",
        image: "images/african-wormwood.jpg",
        alt: "African Wormwood plant."
    },
    {
        name: "Black Jack",
        description: "A flowering plant that can support pollinators and local biodiversity.",
        image: "images/black-jack.jpg",
        alt: "Black Jack plant."
    },
    {
        name: "Sage",
        description: "An aromatic herb that is well suited to sunny growing conditions.",
        image: "images/sage.jpg",
        alt: "Sage plant."
    },
    {
        name: "Rosemary",
        description: "A fragrant herb that thrives in warm, sunny environments.",
        image: "images/rosemary.jpg",
        alt: "Rosemary plant."
    },
    {
        name: "Cowpea",
        description: "A nutritious crop that grows well in warm climates.",
        image: "images/cowpea-leaves.jpg",
        alt: "Cowpea leaves."
    },
    {
        name: "Pigeon Peas",
        description: "A useful food crop that can thrive in warm and dry conditions.",
        image: "images/pigeon-peas.jpg",
        alt: "Pigeon peas."
    },
    {
        name: "Amaranth",
        description: "A nutritious leafy plant that grows well in warm climates.",
        image: "images/amaranth.jpg",
        alt: "Amaranth plant."
    },
    {
        name: "African Nightshade",
        description: "A leafy vegetable traditionally grown as part of African food gardens.",
        image: "images/african-nightshade.jpg",
        alt: "African Nightshade plant."
    }
];


// Den här funktionen visar alla växter i HTML-elementet #plant-list.
function displayPlants(plants) {
    const plantList = document.querySelector("#plant-list");
    
    // Jag går igenom arrayen och skapar ett nytt kort för varje växt.
    plants.forEach(function (plant) {
        const card = document.createElement("figure");
        
        // Klassen används av CSS för att styla växtkortet.
        card.classList.add("plant-card");

        card.innerHTML = `
            <img src="${plant.image}" alt="${plant.alt}">
            <figcaption>
                <h3>${plant.name}</h3>
                <p>${plant.description}</p>
                <button class="favorite-button"
                        data-plant="${plant.name}">
                    Save favourite
                </button>
            </figcaption>
        `;
        // Till sist lägger jag till kortet på sidan.
        plantList.appendChild(card);
    });
}


// Den här funktionen sparar en växt som favorit.
function saveFavourite(name) {
    // Om det inte finns något namn avslutar jag funktionen direkt.
    if (!name) {
        return;
    }
    
    // Jag hämtar tidigare sparade favoriter från localStorage.
    // Om det inte finns några sparade favoriter skapas en tom array.
    let favourites = JSON.parse(localStorage.getItem("favouritePlants")) || [];

    // Jag lägger bara till växten om den inte redan finns i listan.
    if (!favourites.includes(name)) {
        favourites.push(name);
    }

    // Jag sparar den uppdaterade listan i webbläsaren.
    localStorage.setItem("favouritePlants", JSON.stringify(favourites));
    // Uppdaterar texten som visar användarens favoriter.
    showFavourites();
}


// Visar vilka växter användaren har sparat som favoriter.
function showFavourites() {
    const favourites = JSON.parse(localStorage.getItem("favouritePlants")) || [];
    const message = document.querySelector("#favourite-message");

    // Om det finns favoriter visar jag deras namn.
    if (favourites.length > 0) {
        message.innerText = "Your favourite plants: " + favourites.join(", ");
    } else {
        // Annars visar jag ett meddelande om att ingen favorit är sparad.
        message.innerText = "You have not saved any favourite plants yet.";
    }
}


// När sidan öppnas visar jag växtkorten och tidigare sparade favoriter.
displayPlants(plants);
showFavourites();


// Jag använder event delegation för favoritknapparna.
// Då behöver jag inte lägga en separat event listener på varje knapp.
document.querySelector("#plant-list").addEventListener("click", function (event) {

    // Kontrollerar om det som klickades på är en favoritknapp.
    if (event.target.classList.contains("favorite-button")) {
        const plantName = event.target.dataset.plant;

        // Sparar namnet på växten som användaren klickade på.
        saveFavourite(plantName);
    }
});






// Hämtar alla frågor i FAQ-delen.
const faqQuestions = document.querySelectorAll(".faq-question");

// Jag lägger samma klickfunktion på alla frågor.
faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {

        // Hämtar svaret som ligger direkt efter frågan.
        const answer = question.nextElementSibling;

        // Om svaret redan visas gömmer jag det och visar ett plustecken.
        if (answer.style.display === "block") {
            answer.style.display = "none";
            question.querySelector("span").textContent = "+";
        } else {
            // Annars visar jag svaret och byter till ett minustecken.
            answer.style.display = "block";
            question.querySelector("span").textContent = "−";
        }
    });
});

