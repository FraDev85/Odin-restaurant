import "./style.css";
import restaurantVideo from "./assets/restaurant.mp4";
import arancini from "./assets/images/arancini.jpg";
import lasagne from "./assets/images/lasagne.jpg";
import caffe from "./assets/images/caffe.jpg";
import cannoli from "./assets/images/cannoli.jpg";
import cappucino from "./assets/images/cappucino.jpg";
import carbonara from "./assets/images/carbonara.jpg";
import cassata from "./assets/images/cassata.jpg";
import cioccolata from "./assets/images/cioccolata.jpg";
import fruttaMartorana from "./assets/images/fruttaMartorana.jpg";
import gelati from "./assets/images/gelati.jpg";
import grigliataMista from "./assets/images/grigliata-mista.jpg";
import moccacino from "./assets/images/moccacino.jpg";
import pesceSpada from "./assets/images/pescespada.jpg";
import ravanelli from "./assets/images/ravanelli.jpg";
import spaghettiVongole from "./assets/images/spaghettiVongole.jpg";
import totano from "./assets/images/totano.jpg";
import about from "./assets/images/about.jpg";

const footer = document.querySelector(".footer");
const content = document.querySelector("#content");

// page content
function renderHome() {
  return `   <div class="intro">
        <h2 class="text-intro">Via Roma n18, Catania (Sicily)</h2>
        <h1 class="text-central">Traditional Dishes</h1>
        <h2 class="text-under">From 1882</h2>
      </div>
      <div class="welcome">
        <video class="bg-video" autoplay muted loop playsinline>
          Il tuo browser non supporta il video.
        </video>

        <div class="overlay"></div>

        <div class="welcome-content">
          <h3>Welcome in our amazing restaurant</h3>
        </div>
      </div>`;
}

function renderFooter() {
  return `<p class="copyright">
        &copy; 2025 Sicilian Restaurant. All rights reserved.
      </p>`;
}

function renderMenu() {
  const categories = [
    {
      name: "Primi",
      dishes: [
        {
          name: "Spaghetti alle Vongole",
          price: "€12.00",
          img: spaghettiVongole,
        },
        { name: "Carbonara", price: "€10.00", img: carbonara },
        { name: "Lasagne", price: "€11.00", img: lasagne },
      ],
    },
    {
      name: "Secondi",
      dishes: [
        { name: "Grigliata Mista", price: "€18.00", img: grigliataMista },
        { name: "Pesce Spada", price: "€16.00", img: pesceSpada },
        { name: "Totano", price: "€14.00", img: totano },
        { name: "Ravanelli", price: "€8.00", img: ravanelli },
      ],
    },
    {
      name: "Dolci",
      dishes: [
        { name: "Frutta Martorana", price: "€5.00", img: fruttaMartorana },
        { name: "Gelati", price: "€3.50", img: gelati },
        { name: "Cassata", price: "€5.00", img: cassata },
        { name: "Cannoli", price: "€3.50", img: cannoli },
        { name: "Arancini", price: "€4.50", img: arancini },
      ],
    },
    {
      name: "Bevande",
      dishes: [
        { name: "Moccacino", price: "€3.00", img: moccacino },
        { name: "Caffè", price: "€1.50", img: caffe },
        { name: "Cappuccino", price: "€2.00", img: cappucino },
      ],
    },
  ];

  return `
    <div class="menu-page">
      <h1 class="menu-title">Our Menu</h1>
      ${categories
        .map(
          (category) => `
        <div class="menu-category">
          <h2 class="category-title">${category.name}</h2>
          <div class="menu-grid">
            ${category.dishes
              .map(
                (dish) => `
              <div class="card">
                <img src="${dish.img}" alt="${dish.name}" />
                <div class="card-info">
                  <h3>${dish.name}</h3>
                  <p>${dish.price}</p>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderAbout() {
  return `<div class="about-page">
            <div class="about-hero">
             <img src="${about}" alt="Our Restaurant class="about-img">
              <div class="about-overlay">
               <h1 class="about-title">Since 1882</h1>
           </div>
           
             <div class="about-content">
               <div class="about-section">
               <h2>Our Story</h2>
                <p>
                    Nestled in the heart of Catania, at the foot of Mount Etna, our restaurant 
                    has been a cornerstone of Sicilian culinary tradition since 1882. 
                    What began as a humble family trattoria has grown into one of the most 
                    beloved dining destinations in all of Sicily.
                </p> 
            </div>
                <div class="about-section">
          <h2>Our Philosophy</h2>
          <p>
            We believe that food is more than nourishment — it is memory, culture, 
            and love served on a plate. Every dish we prepare follows recipes passed 
            down through five generations, using only the freshest local ingredients 
            sourced from Sicilian farmers and fishermen each morning.
          </p>
        </div>

        <div class="about-section">
          <h2>Our Place</h2>
          <p>
            Located at Via Roma 18, just steps away from the historic Piazza del Duomo, 
            our dining room blends the warmth of traditional Sicilian architecture 
            with a welcoming atmosphere that feels like home. 
            Whether you join us for a quick espresso or a long Sunday lunch, 
            you will always leave with a full heart.
          </p>
        </div>
         <div class="about-stats">
          <div class="stat">
            <h3>140+</h3>
            <p>Years of Tradition</p>
          </div>
          <div class="stat">
            <h3>5</h3>
            <p>Generations of Family</p>
          </div>
          <div class="stat">
            <h3>100%</h3>
            <p>Local Ingredients</p>
          </div>
        </div>
      </div>
    </div>"`;
}

// load Page
function loadPage(page) {
  switch (page) {
    case "home":
      content.innerHTML = renderHome();
      const video = document.querySelector(".bg-video");
      video.src = restaurantVideo;
      video.load();
      break;
    case "menu":
      content.innerHTML = renderMenu();
      break;
    case "about":
      content.innerHTML = renderAbout();
      break;
  }
}

// event listeners
document
  .querySelector("#btn-home")
  .addEventListener("click", () => loadPage("home"));
document
  .querySelector("#btn-menu")
  .addEventListener("click", () => loadPage("menu"));
document
  .querySelector("#btn-about")
  .addEventListener("click", () => loadPage("about"));

loadPage("home");
footer.innerHTML = renderFooter();
