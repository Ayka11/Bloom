document.addEventListener("DOMContentLoaded", () => {
  renderCategoryFilters();
  renderCareTips();
  renderSeasonalGuide();
  renderFeatured();
  updateLibrarySummary(FLOWERS);
  renderFlowers(FLOWERS);

  document.getElementById("searchBar").addEventListener("input", filterFlowers);
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document.getElementById("modal").addEventListener("click", event => {
    if (event.target.id === "modal") {
      closeModal();
    }
  });

  initEcosystem();
});

let currentCategory = null;

function renderCategoryFilters() {
  const categoryFilters = document.getElementById("categoryFilters");
  categoryFilters.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.className = "category-btn active";
  allButton.textContent = "All";
  allButton.onclick = () => filterByCategory(null);
  categoryFilters.appendChild(allButton);

  CATEGORIES.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.textContent = category;
    button.onclick = () => filterByCategory(category);
    categoryFilters.appendChild(button);
  });
}

function renderCareTips() {
  const careTips = document.getElementById("careTips");
  careTips.innerHTML = "";
  CARE_TIPS.forEach(tip => {
    const card = document.createElement("div");
    card.className = "care-tip";
    card.textContent = tip;
    careTips.appendChild(card);
  });
}

function renderSeasonalGuide() {
  const guide = document.getElementById("seasonalGuide");
  guide.innerHTML = "";

  SEASONS.forEach(season => {
    const flowersInSeason = FLOWERS.filter(flower => flower.season.includes(season));

    const card = document.createElement("section");
    card.className = "season-card";
    card.innerHTML = `
      <div class="season-heading">
        <h3>${season}</h3>
        <span>${flowersInSeason.length} blooms</span>
      </div>
      <p>${flowersInSeason.map(flower => flower.name).join(" • ") || "No flowers listed"}</p>
    `;
    guide.appendChild(card);
  });
}

function renderFeatured() {
  const featured = FLOWERS[0];
  const factsCount = FLOWERS.reduce((sum, flower) => sum + flower.facts.length, 0);

  document.getElementById("featured").innerHTML = `
    <div class="featured-copy">
      <p class="eyebrow">Botanical Library</p>
      <h2>Plant of the Month: ${featured.name}</h2>
      <p class="featured-text">${featured.description}</p>
      <div class="featured-meta">
        <span>${FLOWERS.length} illustrated flowers</span>
        <span>${factsCount} facts collected</span>
        <span>${CATEGORIES.length} categories</span>
      </div>
      <button class="category-btn feature-action" data-flower-id="${featured.id}">Explore details</button>
    </div>
    <div class="featured-visual">${featured.svg}</div>
  `;

  document.querySelector(".feature-action").addEventListener("click", () => openModal(featured));
}

function updateLibrarySummary(flowers) {
  const summary = document.getElementById("librarySummary");
  const total = flowers.length;
  const label = currentCategory ? `${currentCategory.toLowerCase()} flowers` : "flowers";
  summary.textContent = `${total} ${label} in the library`;
}

function renderFlowers(flowers) {
  const grid = document.getElementById("flowerGrid");
  grid.innerHTML = "";

  if (flowers.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No flowers matched</h3>
        <p>Try a broader search or clear the active category to see more of the library.</p>
      </div>
    `;
    updateLibrarySummary(flowers);
    return;
  }

  flowers.forEach(flower => {
    const card = document.createElement("article");
    card.className = "flower-card";
    card.onclick = () => openModal(flower);
    card.innerHTML = `
      <div class="flower-visual">${flower.svg}</div>
      <div class="flower-name">${flower.name}</div>
      <div class="flower-latin">${flower.latin}</div>
      <div class="flower-summary">${flower.description}</div>
      <div class="flower-tags">
        <span class="flower-tag">${flower.category}</span>
        <span class="flower-tag">${flower.difficulty}</span>
      </div>
      <div class="flower-footer">
        <span>${flower.watering} water</span>
        <span>${flower.season}</span>
      </div>
    `;
    grid.appendChild(card);
  });

  updateLibrarySummary(flowers);
}

function filterFlowers() {
  const search = document.getElementById("searchBar").value.toLowerCase().trim();
  let filtered = FLOWERS.filter(flower => {
    return (
      flower.name.toLowerCase().includes(search) ||
      flower.latin.toLowerCase().includes(search) ||
      flower.description.toLowerCase().includes(search) ||
      flower.category.toLowerCase().includes(search)
    );
  });

  if (currentCategory) {
    filtered = filtered.filter(flower => flower.category === currentCategory);
  }

  renderFlowers(filtered);
}

function filterByCategory(category) {
  currentCategory = category;
  document.querySelectorAll(".category-btn").forEach(button => {
    const isAll = button.textContent === "All" && category === null;
    const isCategory = button.textContent === category;
    button.classList.toggle("active", isAll || isCategory);
  });
  filterFlowers();
}

function openModal(flower) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div class="modal-flower-visual">${flower.svg}</div>
    <h2>${flower.name}</h2>
    <div class="flower-latin">(${flower.latin})</div>
    <div class="flower-tags modal-tags">
      <span class="flower-tag">${flower.category}</span>
      <span class="flower-tag">${flower.difficulty}</span>
      <span class="flower-tag">${flower.season}</span>
    </div>
    <p><strong>Description:</strong> ${flower.description}</p>
    <p><strong>Watering:</strong> ${flower.watering}</p>
    <p><strong>Care:</strong> ${flower.care}</p>
    <p><strong>Medicinal:</strong> ${flower.medicinal}</p>
    <p><strong>Uses:</strong> ${flower.uses}</p>
    <p><strong>Origin:</strong> ${flower.origin}</p>
    <div class="facts-block">
      <strong>Fascinating facts</strong>
      <ul>
        ${flower.facts.map(fact => `<li>${fact}</li>`).join("")}
      </ul>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function initEcosystem() {
  if (typeof bloomSimulator === "undefined") return;

  bloomSimulator.addListener(state => {
    document.getElementById("sim-season").textContent = state.climate.season;
    document.getElementById("sim-temp").textContent = `${state.climate.temperature.toFixed(1)}°C`;
    document.getElementById("sim-sun").textContent = `${(state.climate.sunlight * 100).toFixed(0)}%`;
    document.getElementById("sim-rain").textContent = `${state.climate.rainfall.toFixed(1)}mm`;

    document.getElementById("sim-nitro").textContent = state.soil.nitrogen.toFixed(2);
    document.getElementById("sim-phos").textContent = state.soil.phosphorus.toFixed(2);
    document.getElementById("sim-potas").textContent = state.soil.potassium.toFixed(2);
    document.getElementById("sim-ph").textContent = state.soil.ph.toFixed(1);

    document.getElementById("sim-biomass").textContent = `${state.growth.biomass.toFixed(2)} units`;
    document.getElementById("sim-rate").textContent = `${state.growth.growthRate.toFixed(3)} units/s`;
    document.getElementById("sim-stress").textContent = `${(state.growth.stress * 100).toFixed(0)}%`;

    if (state.pollination) {
      document.getElementById("sim-p-activity").textContent = `${(state.pollination.pollinatorActivity * 100).toFixed(0)}%`;
      document.getElementById("sim-p-success").textContent = `${(state.pollination.pollinationSuccess * 100).toFixed(1)}%`;
      document.getElementById("sim-p-density").textContent = `${(state.pollination.pollinatorDensity * 100).toFixed(0)}%`;
    }

    if (state.hydrology) {
      document.getElementById("sim-h-ground").textContent = `${state.hydrology.groundwater.toFixed(1)} mm`;
      document.getElementById("sim-h-flow").textContent = `${state.hydrology.waterFlow.toFixed(2)} mm/s`;
      document.getElementById("sim-h-evap").textContent = `${state.hydrology.evaporation.toFixed(2)} mm/s`;
    }

    const elWOcc = document.getElementById("sim-w-occ");
    if (elWOcc && typeof FLOWERS !== "undefined") {
      const regions = [...new Set(FLOWERS.map(f => f.occurrence?.region).filter(Boolean))];
      elWOcc.textContent = `${regions.length} Regions`;
    }
    const elWBiome = document.getElementById("sim-w-biome");
    if (elWBiome) {
      elWBiome.textContent = state.climate.temperature > 25 ? "Tropical" : "Temperate";
    }

    if (state.population) {
      document.getElementById("sim-pop-size").textContent = `${state.population.populationSize.toFixed(0)} organisms`;
      document.getElementById("sim-pop-trend").textContent = `${state.population.dNdt > 0 ? "📈" : "📉"} ${state.population.dNdt.toFixed(2)}/s`;
      document.getElementById("sim-pop-cap").textContent = `${state.population.carryingCapacity_K} K`;
    }
  });

  bloomSimulator.start();
}
