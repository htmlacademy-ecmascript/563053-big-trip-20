import {render, RenderPosition} from './render.js';

import TitleView from './view/title-view.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';

import MockService from './service/mock-service.js';
import DestinationsModel from './model/destination-model.js';
import OfferModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const tripMain = document.querySelector('.trip-main');
const filterForm = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OfferModel(mockService);
const pointsModel = new PointsModel(mockService);

const boardPresenter = new BoardPresenter({container: tripEventsContainer, destinationsModel, offersModel, pointsModel});

render(new TitleView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterForm);

boardPresenter.init();
