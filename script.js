/* *********************************
  DOM selectors
********************************* */
// Container for displaying parks
const parksContainer = document.getElementById("parks");

// Container for showing how many parks are visible
const parkResults = document.getElementById("park-results");

/* *********************************
  Array with objects
********************************* */

const nationalParksInSweden = [
  {
    name: "Abisko",
    size: 77,
    region: "Norrbotten",
    regionGroup: "North",
    image: "abisko-nationalpark.jpg",
  },
  {
    name: "Björnlandet",
    size: 11,
    region: "Västerbotten",
    regionGroup: "North",
    image: "bjornlandet-nationalpark.jpg",
  },
  {
    name: "Blå Jungfrun",
    size: 1.98,
    region: "Kalmar",
    regionGroup: "South",
    image: "bla-jungfrun-nationalpark.webp",
  },
  {
    name: "Dalby Söderskog",
    size: 0.36,
    region: "Skåne",
    regionGroup: "South",
    image: "dalby-soderskog-nationalpark.jpg",
  },
  {
    name: "Djurö",
    size: 24,
    region: "Västra Götaland",
    regionGroup: "Central",
    image: "djuro-nationalpark.webp",
  },
  {
    name: "Fulufjället",
    size: 385,
    region: "Dalarna",
    regionGroup: "Central",
    image: "fulufjallet-nationalpark.jpg",
  },
  {
    name: "Färnebofjärden",
    size: 101,
    region: "Gävleborg",
    regionGroup: "Central",
    image: "farnebofjarden-nationalpark.webp",
  },
  {
    name: "Garphyttan",
    size: 1.11,
    region: "Örebro",
    regionGroup: "Central",
    image: "garphyttan-nationalpark.jpg",
  },
  {
    name: "Gotska Sandön",
    size: 36,
    region: "Gotland",
    regionGroup: "South",
    image: "gotska-sandon-nationalpark.jpg",
  },
  {
    name: "Hamra",
    size: 13.83,
    region: "Gävleborg",
    regionGroup: "Central",
    image: "hamra-nationalpark.jpg",
  },
  {
    name: "Haparanda Skärgård",
    size: 60,
    region: "Norrbotten",
    regionGroup: "North",
    image: "haparanda-skardgards-nationalpark.jpg",
  },
  {
    name: "Kosterhavet",
    size: 388,
    region: "Västra Götaland",
    regionGroup: "South",
    image: "kosterhavets-nationalpark.jpg",
  },
  {
    name: "Muddus",
    size: 493,
    region: "Norrbotten",
    regionGroup: "North",
    image: "muddus-nationalpark.jpg",
  },
  {
    name: "Norra Kvill",
    size: 1.14,
    region: "Kalmar",
    regionGroup: "Central",
    image: "norra-kvill-nationalpark.jpg",
  },
  {
    name: "Padjelanta",
    size: 1984,
    region: "Norrbotten",
    regionGroup: "North",
    image: "padjelanta-nationalpark.jpg",
  },
  {
    name: "Pieljekaise",
    size: 153,
    region: "Norrbotten",
    regionGroup: "North",
    image: "pieljekaise-nationalpark.jpg",
  },
  {
    name: "Sarek",
    size: 1970,
    region: "Norrbotten",
    regionGroup: "North",
    image: "sarek-nationalpark.jpg",
  },
  {
    name: "Skuleskogen",
    size: 30,
    region: "Västernorrland",
    regionGroup: "North",
    image: "skuleskogens-nationalpark.webp",
  },
  {
    name: "Sonfjället",
    size: 103,
    region: "Jämtland",
    regionGroup: "Central",
    image: "sonfjallets-nationalpark.jpg",
  },
  {
    name: "Stenshuvud",
    size: 3.9,
    region: "Skåne",
    regionGroup: "South",
    image: "stenshuvuds-nationalpark.jpg",
  },
  {
    name: "Stora Sjöfallet",
    size: 1278,
    region: "Norrbotten",
    regionGroup: "North",
    image: "stora-sjofallet-nationalpark.jpg",
  },
  {
    name: "Store Mosse",
    size: 100,
    region: "Jönköping",
    regionGroup: "South",
    image: "stora-mosse-nationalpark.jpg",
  },
  {
    name: "Söderåsen",
    size: 16.25,
    region: "Skåne",
    regionGroup: "South",
    image: "soderasen-nationalpark.jpg",
  },
  {
    name: "Tiveden",
    size: 20,
    region: "Västergötland",
    regionGroup: "Central",
    image: "tiveden-nationalpark.jpg",
  },
  {
    name: "Tresticklan",
    size: 28.97,
    region: "Västra Götaland",
    regionGroup: "Central",
    image: "tresticklan-nationalpark.jpg",
  },
  {
    name: "Tyresta",
    size: 19.7,
    region: "Stockholm",
    regionGroup: "Central",
    image: "tyresta-nationalpark.jpg",
  },
  {
    name: "Töfsingdalen",
    size: 16.15,
    region: "Dalarna",
    regionGroup: "Central",
    image: "tofsingdalen-nationalpark.jpg",
  },
  {
    name: "Vadvetjåkka",
    size: 26.3,
    region: "Norrbotten",
    regionGroup: "North",
    image: "vadvetjakka-nationalpark.jpg",
  },
  {
    name: "Åsnen",
    size: 19,
    region: "Kronoberg",
    regionGroup: "South",
    image: "asnen-nationalpark.jpg",
  },
  {
    name: "Ängsö",
    size: 1.68,
    region: "Västmanland",
    regionGroup: "Central",
    image: "angso-nationalpark.jpg",
  },
];

/* *********************************
  Variables to keep track of current state
********************************* */

// Variable to store the current sort option selected by the user
let currentSortOption = "alphabetical"; // Default value

// Variable to store the current filter value selected by the user
let currentFilterValue = "All"; // Default value

// The key to filter parks by, e.g., "regionGroup"
let currentFilterKey = "regionGroup";

/* *********************************
  Function to load parks into the DOM
********************************* */

const loadParks = (parks) => {
  // Initialize an empty string to build up the HTML content
  let html = "";

  // Loop through each park in the array
  parks.forEach((park) => {
    html += `
      <div class="card">
        <div class="card__top">
          <span class="card__badge">${park.size} km²</span>
          <img alt="Image of ${park.name}" class="card__image" src="/images/${park.image}">
        </div>
        <div class="card__bottom">
          <h3 class="card__title">${park.name}</h3>
          <p class="card__info">${park.region}</p>
        </div>
      </div> 
    `;
  });

  // Update the parks container in the DOM with the generated HTML
  parksContainer.innerHTML = html;
};

/* *********************************
  Function to sort parks based on the selected option
********************************* */

const sortParks = (parks, sortOption) => {
  // Create a copy of the parks array to avoid changing the original array
  const parksCopy = [...parks];

  // Check which sort option is selected and sort accordingly
  if (sortOption === "alphabetical") {
    parksCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "largest") {
    parksCopy.sort((a, b) => b.size - a.size);
  } else if (sortOption === "smallest") {
    parksCopy.sort((a, b) => a.size - b.size);
  }

  // Return the sorted array of parks
  return parksCopy;
};

/* *********************************
  Function to update parks display based on current filter and sort
********************************* */

const updateParksDisplay = () => {
  // Start with a copy of the array with all the parks
  let filteredParks = [...nationalParksInSweden];

  // If a specific filter is selected (not "All"), filter the parks
  if (currentFilterValue !== "All") {
    filteredParks = filteredParks.filter(
      (park) => park[currentFilterKey] === currentFilterValue
    );
  }

  // Sort the filtered parks based on the current sort option
  const sortedParks = sortParks(filteredParks, currentSortOption);

  // Update with number of parks currently displayed
  parkResults.innerHTML = `<h3>${sortedParks.length} parker</h3>`;

  // Load the sorted and filtered parks into the DOM
  loadParks(sortedParks);
};

/* *********************************
  Event listeners for region filter buttons
********************************* */

// Select all filter buttons within the element with id "filter-region"
const filterButtons = document.querySelectorAll("#filter-region button");

// Add event listeners to each filter button
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "is-selected" class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("is-selected"));

    // Add the "is-selected" class to the clicked button
    button.classList.add("is-selected");

    // Update the current filter value based on the button's data-region attribute
    currentFilterValue = button.dataset.region;

    // Update the parks display based on the new filter
    updateParksDisplay();
  });
});

/* *********************************
  Event listener for sort select dropdown
********************************* */

// Get the select element for sorting parks
const sortSelect = document.getElementById("sort-parks");

// Add an event listener to the sort select dropdown
sortSelect.addEventListener("change", () => {
  // Update the current sort option based on the selected value
  currentSortOption = sortSelect.value;

  // Update the parks display based on the new sort option
  updateParksDisplay();
});

/* *********************************
  Initial load of parks
********************************* */

updateParksDisplay();
