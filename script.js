const parksContainer = document.getElementById("parks");

/* *********************************
  Array with objects
********************************* */

const nationalParksInSweden = [
  {
    name: "Abisko",
    size: "77 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "abisko-nationalpark.jpg",
  },
  {
    name: "Björnlandet",
    size: "11 km²",
    region: "Västerbotten",
    regionGroup: "Northern Sweden",
    image: "bjornlandet-nationalpark.jpg",
  },
  {
    name: "Blå Jungfrun",
    size: "1.98 km²",
    region: "Kalmar",
    regionGroup: "Southern Sweden",
    image: "bla-jungfrun-nationalpark.webp",
  },
  {
    name: "Dalby Söderskog Nationalpark",
    size: "0.36 km²",
    region: "Skåne",
    regionGroup: "Southern Sweden",
    image: "dalby-soderskog-nationalpark.jpg",
  },
  {
    name: "Djurö",
    size: "24 km²",
    region: "Västra Götaland",
    regionGroup: "Central Sweden",
    image: "djuro-nationalpark.webp",
  },
  {
    name: "Fulufjället",
    size: "385 km²",
    region: "Dalarna",
    regionGroup: "Central Sweden",
    image: "fulufjallet-nationalpark.jpg",
  },
  {
    name: "Färnebofjärden",
    size: "101 km²",
    region: "Gävleborg",
    regionGroup: "Central Sweden",
    image: "farnebofjarden-nationalpark.webp",
  },
  {
    name: "Garphyttan",
    size: "1.11 km²",
    region: "Örebro",
    regionGroup: "Central Sweden",
    image: "garphyttan-nationalpark.jpg",
  },
  {
    name: "Gotska Sandön",
    size: "36 km²",
    region: "Gotland",
    regionGroup: "Southern Sweden",
    image: "gotska-sandon-nationalpark.jpg",
  },
  {
    name: "Hamra",
    size: "13.83 km²",
    region: "Gävleborg",
    regionGroup: "Central Sweden",
    image: "hamra-nationalpark.jpg",
  },
  {
    name: "Haparanda Skärgård",
    size: "60 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "haparanda-skardgards-nationalpark.jpg",
  },
  {
    name: "Kosterhavet",
    size: "388 km²",
    region: "Västra Götaland",
    regionGroup: "Southern Sweden",
    image: "kosterhavets-nationalpark.jpg",
  },
  {
    name: "Muddus",
    size: "493 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "muddus-nationalpark.jpg",
  },
  {
    name: "Norra Kvill",
    size: "1.14 km²",
    region: "Kalmar",
    regionGroup: "Central Sweden",
    image: "norra-kvill-nationalpark.jpg",
  },
  {
    name: "Padjelanta",
    size: "1984 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "padjelanta-nationalpark.jpg",
  },
  {
    name: "Pieljekaise",
    size: "153 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "pieljekaise-nationalpark.jpg",
  },
  {
    name: "Sarek",
    size: "1970 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "sarek-nationalpark.jpg",
  },
  {
    name: "Skuleskogen",
    size: "30 km²",
    region: "Västernorrland",
    regionGroup: "Northern Sweden",
    image: "skuleskogens-nationalpark.webp",
  },
  {
    name: "Sonfjället",
    size: "103 km²",
    region: "Jämtland",
    regionGroup: "Central Sweden",
    image: "sonfjallets-nationalpark.jpg",
  },
  {
    name: "Stenshuvud",
    size: "3.9 km²",
    region: "Skåne",
    regionGroup: "Southern Sweden",
    image: "stenshuvuds-nationalpark.jpg",
  },
  {
    name: "Stora Sjöfallet",
    size: "1278 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "stora-sjofallet-nationalpark.jpg",
  },
  {
    name: "Store Mosse",
    size: "100 km²",
    region: "Jönköping",
    regionGroup: "Southern Sweden",
    image: "stora-mosse-nationalpark.jpg",
  },
  {
    name: "Söderåsen",
    size: "16.25 km²",
    region: "Skåne",
    regionGroup: "Southern Sweden",
    image: "soderasen-nationalpark.jpg",
  },
  {
    name: "Tiveden",
    size: "20 km²",
    region: "Västergötland",
    regionGroup: "Central Sweden",
    image: "tiveden-nationalpark.jpg",
  },
  {
    name: "Tresticklan",
    size: "28.97 km²",
    region: "Västra Götaland",
    regionGroup: "Central Sweden",
    image: "tresticklan-nationalpark.jpg",
  },
  {
    name: "Tyresta",
    size: "19.7 km²",
    region: "Stockholm",
    regionGroup: "Central Sweden",
    image: "tyresta-nationalpark.jpg",
  },
  {
    name: "Töfsingdalen",
    size: "16.15 km²",
    region: "Dalarna",
    regionGroup: "Central Sweden",
    image: "tofsingdalen-nationalpark.jpg",
  },
  {
    name: "Vadvetjåkka",
    size: "26.3 km²",
    region: "Norrbotten",
    regionGroup: "Northern Sweden",
    image: "vadvetjakka-nationalpark.jpg",
  },
  {
    name: "Åsnen",
    size: "19 km²",
    region: "Kronoberg",
    regionGroup: "Southern Sweden",
    image: "asnen-nationalpark.jpg",
  },
  {
    name: "Ängsö",
    size: "1.68 km²",
    region: "Västmanland",
    regionGroup: "Central Sweden",
    image: "angso-nationalpark.jpg",
  },
];

console.log(nationalParksInSweden);

/* *********************************
  #1 Create function to load all parks
********************************* */

const loadParks = () => {
  parksContainer.innerHTML = "";

  nationalParksInSweden.forEach((park) => {
    parksContainer.innerHTML += `
    <div class="card">
      <div class="card__top">
        <span class="card__badge">${park.size}</span>
        <img alt="Image of ${park.name}" class="card__image" src="/images/${park.image}">
      </div>
      <div class="card__bottom">
        <h3 class="card__title">${park.name}</h3>
        <p class="card__info">${park.region}</p>
      </div>
    </div> 
    `;
  });
};

loadParks();
