import {render, RenderPosition} from '../src/framework/render.js';

import TitleView from './view/title-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import DestinationsModel from './model/destination-model.js';
import OfferModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './service/points-api-service.js';
import DestinationsApiService from './service/destinations-api-service.js';
import OffersApiService from './service/offers-api-service.js';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';

const AUTHORIZATION = 'Basic somebasicstring465124';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';

dayjs.extend(duration);

const tripMain = document.querySelector('.trip-main');
const filterForm = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const destinationsModel = new DestinationsModel({destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION)});
const offersModel = new OfferModel({offersApiService: new OffersApiService(END_POINT, AUTHORIZATION)});
const pointsModel = new PointsModel({pointApiService: new PointsApiService(END_POINT, AUTHORIZATION)});
const filterModel = new FilterModel();

pointsModel.init();
offersModel.init();
destinationsModel.init();


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

