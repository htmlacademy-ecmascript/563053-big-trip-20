import { SortType } from '../const.js';
import {render, replace} from '../framework/render.js';
import { updateItem } from '../utils/common.js';
import { filter } from '../utils/filter.js';
import { getPointsDateDifference, getPointsDurationDifference, getPointsPriceDifference } from '../utils/point.js';
import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';

export default class BoardPresenter {
  #eventListComponent = new EventListView();
  #container = null;
  #destinationModel = null;
  #offersModel = null;
  #pointsModel = null;
  #sortComponent = null;
  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;
  #filterModel = null;

  constructor({container, destinationsModel, offersModel, pointsModel, filterModel}) {
    this.#container = container;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
  }

  init() {

    this.#renderBoard();
  }

  get points() {
    const filterType = this.#filterModel.get();
    const filteredPoints = filter[filterType](this.#pointsModel.get());

    return sort[this.#currentSortType](filteredPoints);
  }

  #sortTypeChangeHandler = (sortType) => {
    this.#currentSortType = sortType;

    this.#clearPoints();
    this.#renderSort();
    this.#renderPoints();
  }


  #handleTaskChange = (updatedPoint) => {
    this.#boardPoints = updateItem(this.#boardPoints, updatedPoint);
    this.#sourcedBoardPoints = updateItem(this.#sourcedBoardPoints, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  /*#sortPoints(sortType) {
    switch (sortType) {
      case SortType.DAY:
        this.#boardPoints.sort(getPointsDateDifference);
        break;
      case SortType.TIME:
        this.#boardPoints.sort(getPointsDurationDifference);
        break;
      case SortType.PRICE:
        this.#boardPoints.sort(getPointsPriceDifference);
        break;
      default:
        this.#boardPoints = [...this.#sourcedBoardPoints];
    }

    this.#currentSortType = sortType;
  }*/

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType !== sortType) {
      this.#sortPoints(sortType);
      this.#clearPoints();
      this.#renderPoints();
    }
  };

  #clearPoints() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderSort() {
    const prevSortComponent = this.#sortComponent;

    this.#sortComponent = new SortView({
      sortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    if (prevSortComponent) {
      replace(this.#sortComponent, prevSortComponent);
      remove(prevSortComponent);
    } else {
      render(this.#sortComponent, this.#container);
    }
  }

  #renderPoints() {
    this.#boardPoints.forEach(this.#renderPoint);
  }

  #renderListComponent() {
    render(this.#eventListComponent, this.#container);
  }

  #renderPoint = (point) => {

    const pointPresenter = new PointPresenter({
      container: this.#eventListComponent.element,
      destinationModel: this.#destinationModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleTaskChange,
      onModeChange: this.#handleModeChange
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #renderBoard() {
    /*if (this.points.length === 0 && !this.#isCreating) {
      this.#renderMessage();
      return;
    }*/

    this.#renderSort();
    this.#renderListComponent();
    this.#renderPoints();
  }

  #clearBoard = ({resetSortType = false} = {}) => {
    this.#clearPoints();
    remove(this.#messageComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #viewActionHandler = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.update(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.delete(updateType, update);
        break;
      case UserAction.CREATE_POINT:
        this.#pointsModel.add(updateType, update);
        break;
    }
  };

  #modeEventHandler = (updateType, data) => {
    switch (updateType) {
      case updateType.PATCH:
        this.#pointPresenters.get(data.id)?.init(data);
        break;
      case updateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case updateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
    }
  };

  #modeChangeHandler = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
    this.#newPointPresenter.destroy();
  }
}
