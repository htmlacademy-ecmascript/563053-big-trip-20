import {render, replace} from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter';

export default class BoardPresenter {
  #eventListComponent = new EventListView();
  #container = null;
  #destinationModel = null;
  #offersModel = null;
  #pointsModel = null;
  #boardPoints = null;
  #sortComponent = new SortView();

  constructor({container, destinationsModel, offersModel, pointsModel}) {
    this.#container = container;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;

    this.#boardPoints = [...pointsModel.points];
  }

  init() {
    this.#renderBoard();
  }

  #renderSort() {
    render(this.#sortComponent, this.#container);
  }

  #renderPoints() {
    this.#boardPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderListComponent() {
    render(this.#eventListComponent, this.#container);
  }

  #renderPoint = (point) => {

    const pointPresenter = new PointPresenter({
      container: this.#eventListComponent.element,
      destinationModel: this.#destinationModel,
      offersModel: this.#offersModel,
    });

    pointPresenter.init(point);
  };

  #renderBoard() {
    this.#renderSort();
    this.#renderListComponent();
    this.#renderPoints();
  }
}
