import Home from "./tab/home";
import Menu from "./tab/menu";
import Contact from "./tab/contact";
const content = document.querySelector(".tabs");

function Component() {
  for (let i = 0; i < 3; i++) {
    const tab = document.createElement("button");
    tab.setAttribute("class", `tab${i}`);
    content.appendChild(tab);
  }

  document.querySelector(".tab0").textContent = "Home";
  document.querySelector(".tab0").onclick = Home;

  document.querySelector(".tab1").textContent = "Menu";
  document.querySelector(".tab1").onclick = Menu;

  document.querySelector(".tab2").textContent = "Contact";
  document.querySelector(".tab2").onclick = Contact;

  return content;
}
document.body.appendChild(Component());
