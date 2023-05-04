import {render} from './render.js';
import TitleView from './view/title-view.js';

const tripMain = document.querySelector('.trip-main');
console.log(tripMain);
render(new TitleView(), tripMain);

