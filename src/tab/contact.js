const section = document.querySelector(".section");
export default function Contact() {
  const div = document.createElement("div");
  div.setAttribute("class", "contact");
  Title(div);
  SocialNetworks(div);
  Telephone(div);
  Email(div);
  section.replaceChildren(div);
  return section;
}

function Title(div) {
  const h1 = document.createElement("h1");
  h1.textContent = "Contact";
  div.appendChild(h1);
  return div;
}

function SocialNetworks(div) {
  const instagram = document.createElement("p");
  instagram.textContent = "Instagram: @elsaltodelpapu";
  div.appendChild(instagram);
  const facebook = document.createElement("p");
  facebook.textContent = "Facebook: El salto del papu";
  div.appendChild(facebook);
  return div;
}

function Telephone(div) {
  const telephone = document.createElement("p");
  telephone.textContent = "+54 9 (341) 555 888";
  div.appendChild(telephone);
  return div;
}

function Email(div) {
  const email = document.createElement("p");
  email.textContent = "Email: elsaltodelpapu@gmail.com";
  div.appendChild(email);
  return div;
}
