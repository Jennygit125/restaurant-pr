function renderPage(title, description, content) {
  const contentDiv = document.getElementById("pasta");

  if (contentDiv) {
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading.textContent = title;
    paragraph.textContent = description;
    contentDiv.replaceChildren(heading, paragraph);
    if (content) {
      if (typeof content === 'string') {
        const div = document.createElement('div');
        div.innerHTML = content;
        contentDiv.appendChild(div);
      } else {
        contentDiv.appendChild(content);
      }
    }
    return true;
  }

  console.error("Element with ID 'pasta' not found");
  return false;
}

const menuData = {
  foodItems: [
    { name: "Food Menu 01", price: "$15", desc: "Food with quality ingredients and delicious taste." },
    { name: "Food Menu 02", price: "$20", desc: "Food with quality ingredients and delicious taste." },
    { name: "Food Menu 03", price: "$35", desc: "Food with quality ingredients and delicious taste." },
    { name: "Food Menu 04", price: "$40", desc: "Food with quality ingredients and delicious taste." },
    { name: "Food Menu 05", price: "$55", desc: "Food with quality ingredients and delicious taste." },
    { name: "Food Menu 06", price: "$15", desc: "Food with quality ingredients and delicious taste." },
    { name: "Food Menu 07", price: "$15", desc: "Food with quality ingredients and delicious taste." },
  ],
  drinkItems: [
    { name: "Drink Menu 01", price: "$10", desc: "Drinks made from quality ingredients and have a fresh taste." },
    { name: "Drink Menu 02", price: "$15", desc: "Drinks made from quality ingredients and have a fresh taste." },
    { name: "Drink Menu 03", price: "$20", desc: "Drinks made from quality ingredients and have a fresh taste." },
    { name: "Drink Menu 04", price: "$25", desc: "Drinks made from quality ingredients and have a fresh taste." },
    { name: "Drink Menu 05", price: "$30", desc: "Drinks made from quality ingredients and have a fresh taste." },
    { name: "Drink Menu 06", price: "$35", desc: "Drinks made from quality ingredients and have a fresh taste." },
    { name: "Drink Menu 07", price: "$40", desc: "Drinks made from quality ingredients and have a fresh taste." },
  ],
};

function buildMenuHTML() {
  const menuHTML = `
    <div class="menu-container">
      <div class="header">
        <div class="main-title">Mija's Pasta</div>
        <div class="divider"></div>
      </div>
      <div class="menu-columns">
        <div class="column-divider"></div>
        <div class="column">
          <h2 class="section-title">Food Menu</h2>
          ${menuData.foodItems.map(item => `
            <div class="menu-item">
              <div class="item-header">
                <span>${item.name}</span>
                <span class="dots"></span>
                <span>${item.price}</span>
              </div>
              <div class="description">${item.desc}</div>
            </div>
          `).join('')}
        </div>
        <div class="column">
          <h2 class="section-title">Drink Menu</h2>
          ${menuData.drinkItems.map(item => `
            <div class="menu-item">
              <div class="item-header">
                <span>${item.name}</span>
                <span class="dots"></span>
                <span>${item.price}</span>
              </div>
              <div class="description">${item.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="footer-address">
        123 Anywhere ST., Any City, ST 12345
      </div>
    </div>
  `;
  return menuHTML;
}

export function createRestaurantHomePage() {
  if (
    renderPage(
      "Welcome to our restaurant",
      "Best food in town just for you!",
    )
  ) {
    console.log("Home page function executed");
  }
}
export function createRestaurantMenuPage() {
  if (
    renderPage(
      "Our Menu",
      "Check out our delicious dishes!",
      buildMenuHTML(),
    )
  ) {
    console.log("Menu page function executed");
  }
}


export const pageRenderers = {
  home: createRestaurantHomePage,
  menu: createRestaurantMenuPage,
};

export function notifyMissingPage(pageName) {
  const message = `${pageName} page not generated.`;

  if (renderPage(pageName, message)) {
    return;
  }

  console.warn(message);
}
