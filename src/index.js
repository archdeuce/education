import gitData from './data/git.json';
import javascriptData from './data/javascript.json';
import markupData from './data/markup.json';
import nodejsData from './data/nodejs.json';
import reactData from './data/react.json';

const pageTitle = document.querySelector('title').innerText;
const videoList = document.querySelector('#videos');
const materialsList = document.querySelector('#materials');

const getListContent = (data = []) => {
  return data
    .map(({ title, url }) => {
      return `<li><a href="${url}" target="_blank">${title}</a></li>`;
    })
    .join('');
};

const renderList = data => {
  const { videos, materials } = data;

  videoList.innerHTML = getListContent(videos);
  materialsList.innerHTML = getListContent(materials);
};

switch (pageTitle) {
  case 'Markup':
    renderList(markupData);
    console.log('markupData', markupData);
    break;
  case 'JavaScript':
    renderList(javascriptData);
    break;
  case 'React':
    renderList(reactData);
    break;
  case 'NodeJS':
    renderList(nodejsData);
    break;
  case 'Git':
    renderList(gitData);
    break;
  default:
    break;
}
