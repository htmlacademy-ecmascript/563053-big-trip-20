import {render, RenderPosition} from './render.js';
import TitleView from './view/title-view.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter';

const tripMain = document.querySelector('.trip-main');
const filterForm = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({container: tripEventsContainer})

render(new TitleView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterForm);

boardPresenter.init();
