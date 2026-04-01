function renderPage(title, description) {
  const content = document.getElementById("content");

  if (content) {
    const heading = document.createElement("h1");
    const paragraph = document.createElement("p");

    heading.textContent = title;
    paragraph.textContent = description;
    content.replaceChildren(heading, paragraph);
    return true;
  }

  console.error("Element with ID 'content' not found");
  return false;
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

export const pageRenderers = {
  home: createRestaurantHomePage,
};

export function notifyMissingPage(pageName) {
  const message = `${pageName} page not generated.`;

  if (renderPage(pageName, message)) {
    return;
  }

  console.warn(message);
}
