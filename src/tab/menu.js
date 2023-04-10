const section = document.querySelector(".section");
export default function Menu() {
  const div = document.createElement("div");
  div.setAttribute("class", "menu");
  FirstMenu(div);
  SecondMenu(div);
  ThirdMenu(div);
  section.replaceChildren(div);
  return section;
}

function FirstMenu(div) {
  const h1 = document.createElement("h1");
  h1.textContent = "Grilled Cheese Sandwich";
  div.appendChild(h1);
  const description = document.createElement("p");
  description.textContent =
    "Nonstick pan with buttered bread and American Cheddar for a classic hot sandwich.";
  div.appendChild(description);
  return div;
}

function SecondMenu(div) {
  const h1 = document.createElement("h1");
  h1.textContent = "Hummus Pizza";
  div.appendChild(h1);
  const description = document.createElement("p");
  description.textContent =
    "This pizza uses hummus instead of the usual red sauce—a unique and  healthy pizza for those bored with the traditional . Top with your favorite veggies and cheese ingredients";
  div.appendChild(description);
  return div;
}

function ThirdMenu(div) {
  const h1 = document.createElement("h1");
  h1.textContent = "Low-Carb Tacos";
  div.appendChild(h1);
  const description = document.createElement("p");
  description.textContent =
    "This is a great low-carb alternative to your standard homemade tacos. I love Mexican food and wasn't willing to part with tacos after starting my low-carb diet. This always satisfies my craving";
  div.appendChild(description);
  return div;
}
