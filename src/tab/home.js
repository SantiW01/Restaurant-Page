const section = document.querySelector(".section");
export default function Home() {
  const div = document.createElement("div");
  div.setAttribute("class", "home");
  Title(div);
  Description(div);
  Hours(div);
  Location(div);
  section.replaceChildren(div);
  return section;
}

function Title(div) {
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "restaurant_name");
  h1.textContent = "El bar del salto del papu";
  div.appendChild(h1);

  return div;
}

function Description(div) {
  const description = document.createElement("p");
  description.setAttribute("class", "restaurant_description");
  description.textContent =
    "This bar was created in honor of Bananirou. A well-recognized streamer from Argentina who content is mainly about doing Speedrun of GTA: San Andreas but sometimes he does something else. Hope you enjoy our meals as much as we enjoy Bananirou's streams";
  div.appendChild(description);

  return div;
}

function Hours(div) {
  const hours = document.createElement("div");
  hours.setAttribute("class", "restaurant_hours");
  for (let i = 0; i < 7; i++) {
    switch (i) {
      case 0:
        hours.innerHTML = `Sunday: 8am - 8pm.<br>`;
        break;
      case 1:
        hours.innerHTML += `Monday: 8am - 8pm.<br>`;
        break;
      case 2:
        hours.innerHTML += `Tuesday: 8am - 8pm.<br>`;
        break;
      case 3:
        hours.innerHTML += `Wednesday: 8am - 8pm.<br>`;
        break;
      case 4:
        hours.innerHTML += `Thursday: 8am - 8pm.<br>`;
        break;
      case 5:
        hours.innerHTML += `Friday: 8am - 8pm.<br>`;
        break;
      case 6:
        hours.innerHTML += `Saturday: 8am - 8pm.</br>`;
        break;
    }
  }
  div.appendChild(hours);
  return div;
}

function Location(div) {
  const location = document.createElement("p");
  location.setAttribute("class", "restaurant_location");
  location.textContent = "Rosario, Argentina";
  div.appendChild(location);
  return div;
}
