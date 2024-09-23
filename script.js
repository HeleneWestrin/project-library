/* *********************************
  Constants
********************************* */
const FILTER_ALL = "All";
const SORT_ALPHABETICAL = "alphabetical";
const SORT_LARGEST = "largest";
const SORT_SMALLEST = "smallest";
const FILTER_KEY_REGION_GROUP = "regionGroup";

/* *********************************
  DOM selectors & Variables
********************************* */

// Container for displaying parks
const parksContainer = document.getElementById("parks");

// Container for showing how many parks are visible
const parkResults = document.getElementById("park-results");

// Variable to store the current sort option selected by the user
let currentSortOption = SORT_ALPHABETICAL; // Default value

// Variable to store the current filter value selected by the user
let currentFilterValue = FILTER_ALL; // Default value

// The key to filter parks by, e.g., "regionGroup"
let currentFilterKey = FILTER_KEY_REGION_GROUP;

// Global variable to store the current search term
let currentSearchTerm = ""; // Default value is an empty string

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
    externalLink:
      "https://www.sverigesnationalparker.se/park/abisko-nationalpark/",
  },
  {
    name: "Björnlandet",
    size: 11,
    region: "Västerbotten",
    regionGroup: "North",
    image: "bjornlandet-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/bjornlandets-nationalpark/",
  },
  {
    name: "Blå Jungfrun",
    size: 1.98,
    region: "Kalmar",
    regionGroup: "South",
    image: "bla-jungfrun-nationalpark.webp",
    externalLink:
      "https://www.sverigesnationalparker.se/park/bla-jungfrun-nationalpark/",
  },
  {
    name: "Dalby Söderskog",
    size: 0.36,
    region: "Skåne",
    regionGroup: "South",
    image: "dalby-soderskog-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/dalby-soderskog-nationalpark/",
  },
  {
    name: "Djurö",
    size: 24,
    region: "Västra Götaland",
    regionGroup: "Central",
    image: "djuro-nationalpark.webp",
    externalLink:
      "https://www.sverigesnationalparker.se/park/djuro-nationalpark/",
  },
  {
    name: "Fulufjället",
    size: 385,
    region: "Dalarna",
    regionGroup: "Central",
    image: "fulufjallet-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/fulufjallets-nationalpark/",
  },
  {
    name: "Färnebofjärden",
    size: 101,
    region: "Gävleborg",
    regionGroup: "Central",
    image: "farnebofjarden-nationalpark.webp",
    externalLink:
      "https://www.sverigesnationalparker.se/park/farnebofjardens-nationalpark/",
  },
  {
    name: "Garphyttan",
    size: 1.11,
    region: "Örebro",
    regionGroup: "Central",
    image: "garphyttan-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/garphyttans-nationalpark/",
  },
  {
    name: "Gotska Sandön",
    size: 36,
    region: "Gotland",
    regionGroup: "South",
    image: "gotska-sandon-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/gotska-sandons-nationalpark/",
  },
  {
    name: "Hamra",
    size: 13.83,
    region: "Gävleborg",
    regionGroup: "Central",
    image: "hamra-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/hamra-nationalpark/",
  },
  {
    name: "Haparanda Skärgård",
    size: 60,
    region: "Norrbotten",
    regionGroup: "North",
    image: "haparanda-skardgards-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/haparanda-skargards-nationalpark/",
  },
  {
    name: "Kosterhavet",
    size: 388,
    region: "Västra Götaland",
    regionGroup: "South",
    image: "kosterhavets-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/kosterhavets-nationalpark/",
  },
  {
    name: "Muddus",
    size: 493,
    region: "Norrbotten",
    regionGroup: "North",
    image: "muddus-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/muddus--muttos-nationalpark/",
  },
  {
    name: "Norra Kvill",
    size: 1.14,
    region: "Kalmar",
    regionGroup: "Central",
    image: "norra-kvill-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/norra-kvills-nationalpark/",
  },
  {
    name: "Padjelanta",
    size: 1984,
    region: "Norrbotten",
    regionGroup: "North",
    image: "padjelanta-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/padjelanta--badjelannda-nationalpark/",
  },
  {
    name: "Pieljekaise",
    size: 153,
    region: "Norrbotten",
    regionGroup: "North",
    image: "pieljekaise-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/pieljekaise-nationalpark/",
  },
  {
    name: "Sarek",
    size: 1970,
    region: "Norrbotten",
    regionGroup: "North",
    image: "sarek-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/sarek-nationalpark/",
  },
  {
    name: "Skuleskogen",
    size: 30,
    region: "Västernorrland",
    regionGroup: "North",
    image: "skuleskogens-nationalpark.webp",
    externalLink:
      "https://www.sverigesnationalparker.se/park/skuleskogens-nationalpark/",
  },
  {
    name: "Sonfjället",
    size: 103,
    region: "Jämtland",
    regionGroup: "Central",
    image: "sonfjallets-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/sonfjallets-nationalpark/",
  },
  {
    name: "Stenshuvud",
    size: 3.9,
    region: "Skåne",
    regionGroup: "South",
    image: "stenshuvuds-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/stenshuvuds-nationalpark/",
  },
  {
    name: "Stora Sjöfallet",
    size: 1278,
    region: "Norrbotten",
    regionGroup: "North",
    image: "stora-sjofallet-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/stora-sjofallets--stuor-muorkke-nationalpark/",
  },
  {
    name: "Store Mosse",
    size: 100,
    region: "Jönköping",
    regionGroup: "South",
    image: "stora-mosse-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/store-mosse-nationalpark/",
  },
  {
    name: "Söderåsen",
    size: 16.25,
    region: "Skåne",
    regionGroup: "South",
    image: "soderasen-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/soderasens-nationalpark/",
  },
  {
    name: "Tiveden",
    size: 20,
    region: "Västergötland",
    regionGroup: "Central",
    image: "tiveden-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/tivedens-nationalpark/",
  },
  {
    name: "Tresticklan",
    size: 28.97,
    region: "Västra Götaland",
    regionGroup: "Central",
    image: "tresticklan-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/tresticklans-nationalpark/",
  },
  {
    name: "Tyresta",
    size: 19.7,
    region: "Stockholm",
    regionGroup: "Central",
    image: "tyresta-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/tyresta-nationalpark/",
  },
  {
    name: "Töfsingdalen",
    size: 16.15,
    region: "Dalarna",
    regionGroup: "Central",
    image: "tofsingdalen-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/tofsingdalens-nationalpark/",
  },
  {
    name: "Vadvetjåkka",
    size: 26.3,
    region: "Norrbotten",
    regionGroup: "North",
    image: "vadvetjakka-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/vadvetjakka-nationalpark/",
  },
  {
    name: "Åsnen",
    size: 19,
    region: "Kronoberg",
    regionGroup: "South",
    image: "asnen-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/asnens-nationalpark/",
  },
  {
    name: "Ängsö",
    size: 1.68,
    region: "Västmanland",
    regionGroup: "Central",
    image: "angso-nationalpark.jpg",
    externalLink:
      "https://www.sverigesnationalparker.se/park/angso-nationalpark/",
  },
];

/* *********************************
  Function to load parks into the DOM
********************************* */

const renderParks = (parks) => {
  // Initialize an empty string to build up the HTML content
  let html = "";

  // Loop through each park in the array
  parks.forEach((park) => {
    html += `
      <a href="${park.externalLink}" target="_blank" class="card">
        <div class="card__top">
          <span class="card__badge">${park.size} km²</span>
          <img width="250" height="300" alt="Image of ${park.name}" class="card__image" src="/images/${park.image}">
        </div>
        <div class="card__bottom">
          <h3 class="card__title">${park.name}</h3>
          <p class="card__info">${park.region}</p>
        </div>
      </div> 
    `;
  });

  // Update with number of parks currently displayed
  parkResults.innerHTML = `<h3>${parks.length} parks</h3>`;

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
  if (sortOption === SORT_ALPHABETICAL) {
    parksCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === SORT_LARGEST) {
    parksCopy.sort((a, b) => b.size - a.size);
  } else if (sortOption === SORT_SMALLEST) {
    parksCopy.sort((a, b) => a.size - b.size);
  }

  // Return the sorted array of parks
  return parksCopy;
};

/* *********************************
  Function to update parks display based on current filter and sort
********************************* */

const updateParksDisplay = () => {
  // If filter is set to "All", use the original array and apply the search filter
  let parksToDisplay = [...nationalParksInSweden];

  // Apply region filter if not "All"
  if (currentFilterValue !== FILTER_ALL) {
    parksToDisplay = parksToDisplay.filter((park) => {
      return park[currentFilterKey] === currentFilterValue;
    });
  }

  // If a search term is provided, filter the parks based on the search term
  if (currentSearchTerm) {
    parksToDisplay = parksToDisplay.filter((park) =>
      JSON.stringify(park)
        .toLowerCase()
        .includes(currentSearchTerm.toLowerCase())
    );
  }

  // Sort the parks based on the current sort option
  parksToDisplay = sortParks(parksToDisplay, currentSortOption);

  // Load the sorted and filtered parks into the DOM
  renderParks(parksToDisplay);
};

/* *********************************
  Event listeners for region filter buttons
********************************* */

// Select all filter buttons within the element with id "filter-region"
const filterButtons = document.querySelectorAll("#filter-region button");

// Add event listeners to each filter button
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // If the user clicks the active filter, stop executing with return
    if (currentFilterValue === button.dataset.region) {
      return;
    }

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
  Event listener for search input
********************************* */

const searchInput = document.getElementById("search-parks__input");

searchInput.addEventListener("input", () => {
  // Update the global search term
  currentSearchTerm = searchInput.value;

  // Update the parks display based on the search term
  updateParksDisplay();
});

/* *********************************
  Initial load of parks
********************************* */

updateParksDisplay();
