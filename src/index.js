import gitData from './data/git.json';
import javascriptData from './data/javascript.json';
import markupData from './data/markup.json';
import nodejsData from './data/nodejs.json';
import reactData from './data/react.json';

const pageTitle = document.querySelector('title').innerText;
const videoList = document.querySelector('#videos');
const materialsList = document.querySelector('#materials');
const topArrow = document.querySelector('#top-arrow');
const navList = document.querySelectorAll('#nav-list>li>a');

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
    navList[0].classList.add('active__link');
    renderList(markupData);
    break;
  case 'JavaScript':
    navList[1].classList.add('active__link');
    renderList(javascriptData);
    break;
  case 'React':
    navList[2].classList.add('active__link');
    renderList(reactData);
    break;
  case 'NodeJS':
    navList[3].classList.add('active__link');
    renderList(nodejsData);
    break;
  case 'Git':
    navList[4].classList.add('active__link');
    renderList(gitData);
    break;
  default:
    break;
}

const onScroll = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topArrow.classList.add('visible');
  } else {
    topArrow.classList.remove('visible');
  }
};

const handleOnTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

window.addEventListener('scroll', onScroll);
topArrow.addEventListener('click', handleOnTop);
