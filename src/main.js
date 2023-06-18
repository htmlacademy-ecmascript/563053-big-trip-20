import {render, RenderPosition} from '../src/framework/render.js';

import TitleView from './view/title-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

import MockService from './service/mock-service.js';
import DestinationsModel from './model/destination-model.js';
import OfferModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';

dayjs.extend(duration);

const tripMain = document.querySelector('.trip-main');
const filterForm = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OfferModel(mockService);
const pointsModel = new PointsModel(mockService);
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({
  container: filterForm,
  pointsModel,
  filterModel
});

const boardPresenter = new BoardPresenter({container: tripEventsContainer, newPointButtonContainer: tripMain, destinationsModel, offersModel, pointsModel, filterModel});

render(new TitleView({
  title: 'Amsterdam - Chamonix - Geneva',
  dateFrom: dayjs(new Date()).subtract(20, 'day').toDate(),
  dateTo: new Date(),
  price: 1230,
}), tripMain, RenderPosition.AFTERBEGIN);

filterPresenter.init();
boardPresenter.init();
