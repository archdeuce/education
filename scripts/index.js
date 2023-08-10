import javascriptData from "./data/javascript.json" assert { type: "json" };
import markupData from "./data/markup.json" assert { type: "json" };
import nodejsData from "./data/nodejs.json" assert { type: "json" };
import reactData from "./data/react.json" assert { type: "json" };

const pageTitle = document.querySelector("title").innerText;
const list = document.querySelector("ol");

const renderList = (data) => {
  list.innerHTML = data
    .map(({ title, url }) => {
      return `<li><a href="${url}" target="_blank">${title}</a></li>`;
    })
    .join("");
};

switch (pageTitle) {
  case "Markup":
    renderList(markupData);
    break;
  case "JavaScript":
    renderList(javascriptData);
    break;
  case "React":
    renderList(reactData);
    break;
  case "NodeJS":
    renderList(nodejsData);
    break;
  default:
    break;
}