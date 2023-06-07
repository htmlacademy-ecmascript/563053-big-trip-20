import { render, replace, remove } from '../framework/render.js';
import EditPointView from '../view/edit-point-view.js';
import TripItemView from '../view/trip-item-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class PointPresenter {
  #container = null;
  #point = null;
  #pointComponent = null;
  #destinationModel = null;
  #offersModel = null;
  #editPointComponent = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #mode = Mode.DEFAULT;

  constructor({container, destinationModel, offersModel, onDataChange, onModeChange}) {
    this.#container = container;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {

    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#editPointComponent;

    this.#pointComponent = new TripItemView({
      point1: this.#point,
      pointOffers: this.#offersModel.offers,
      onEditClickHandler: () => {
        this.#replacePointsToForm();
        document.addEventListener('keydown', this.#onEscKeydown);
      },
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#editPointComponent = new EditPointView({
      point: point,
      pointDestinations: this.#destinationModel.destinations,
      pointOffers: this.#offersModel.offers,
      onFormSubmit: () => {
        this.#handleDataChange(point);
        this.#replaceFormToPoints();
        document.removeEventListener('keydown', this.#onEscKeydown);
      },
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      return render(this.#pointComponent, this.#container);
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editPointComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoints();
    }
  }

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #onEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoints();
      document.removeEventListener('keydown', this.#onEscKeydown);
    }
  };

  #replacePointsToForm() {
    replace(this.#editPointComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoints() {
    replace(this.#pointComponent, this.#editPointComponent);
    this.#mode = Mode.DEFAULT;
  }
}
