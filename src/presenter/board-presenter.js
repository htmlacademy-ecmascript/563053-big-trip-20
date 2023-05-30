import {render, replace} from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import TripItemView from '../view/trip-item-view.js';
import AbstractView from '../framework/view/abstract-view.js';

export default class BoardPresenter extends AbstractView {
  #eventListComponent = new EventListView();
  #container = null;
  #destinationModel = null;
  #offersModel = null;
  #pointsModel = null;
  #boardPoints = null;

  constructor({container, destinationsModel, offersModel, pointsModel}) {
    super();
    this.#container = container;
    this.#destinationModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;

    this.#boardPoints = [...pointsModel.points];
  }

  init() {
    render(new SortView(), this.#container);
    render(this.#eventListComponent, this.#container);

    /*render(new EditPointView({
      point: this.#boardPoints[0],
      pointDestinations: this.#destinationModel.destinations,
      pointOffers: this.#offersModel.offers
    }), this.#eventListComponent.element);*/

    this.#boardPoints.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const onEscKeydown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoints();
        document.removeEventListener('keydown', onEscKeydown);
      }
    };
    const pointComponent = new TripItemView({
      point1: point,
      pointOffers: this.#offersModel.offers,
      onEditClickHandler: () => {
        replacePointsToForm();
        document.addEventListener('keydown', onEscKeydown);
      }
    });
    const editPointComponent = new EditPointView({
      point: point,
      pointDestinations: this.#destinationModel.destinations,
      pointOffers: this.#offersModel.offers,
      onFormSubmit: () => {
        replaceFormToPoints();
        document.removeEventListener('keydown', onEscKeydown);
      },
    });

    function replacePointsToForm() {
      replace(editPointComponent, pointComponent);
    }

    function replaceFormToPoints() {
      replace(pointComponent, editPointComponent);
    }

    render(pointComponent, this.#eventListComponent.element);
  }
}
