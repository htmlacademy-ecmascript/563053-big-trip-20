import { formatStringToDateTime } from '../utils.js';
import {POINT_EMPTY} from '../mock/const.js';
import AbstractView from '../framework/view/abstract-view.js';

function getEditPointTemplate ({point, pointDestination, pointOffers}) {
  const {
    basePrice, dateFrom, dateTo, offers, type
  } = point;

  const DEFAULT_TYPES = [
    {text: 'Taxi', id: 'taxi'},
    {text: 'Bus', id: 'bus'},
    {text: 'Train', id: 'train'},
    {text: 'Ship', id: 'ship'},
    {text:'Drive', id: 'drive'},
    {text: 'Flight', id: 'flight'},
    {text: 'Check-in', id: 'check-in'},
    {text: 'Sightseeing', id: 'sightseeing'},
    {text: 'Restaurant', id: 'restaurant'}];

  const pointOffer = pointOffers.find((offer) => offer.type === type);

  const offersData = /*offers.length && */pointOffer.offers.filter(({id}) => offers.indexOf(id) !== -1);

  const destination = pointDestination.find((descPoint) => descPoint.id === point.destination);

  function createTypesTemplate () {
    return DEFAULT_TYPES.map((types) =>
      `<div class="event__type-item">
      <input id="event-type-${types.id}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${types.id}">
      <label class="event__type-label  event__type-label--${types.id}" for="event-type-${types.id}-1">${types.text}</label>
    </div>`
    ).join('');
  }

  function createPhotoTemplate () {
    return destination.pictures.map((picture) =>
      `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`
    ).join('');
  }

  const photoTemplate = createPhotoTemplate();

  const typesTemplate = createTypesTemplate();

  function createOfferTemplate () {

    return offersData.map((offer) =>
      `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
    <label class="event__offer-label" for="event-offer-luggage-1">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`
    ).join('');
  }

  const offersTemplate = createOfferTemplate(offersData);

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typesTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatStringToDateTime(dateFrom)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatStringToDateTime(dateTo)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${offersTemplate}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.description}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                    ${photoTemplate}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
              </li>
`;
}
export default class EditPointView extends AbstractView {

  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #onFormSubmit = null;

  constructor({point = POINT_EMPTY, pointDestinations, pointOffers, onFormSubmit}) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestinations;
    this.#pointOffers = pointOffers;
    this.#onFormSubmit = onFormSubmit;

    this.element.querySelector('form').addEventListener('submit', this.#onFormSubmitClick);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onFormSubmitClick);
  }

  get template() {
    return getEditPointTemplate({
      point: this.#point,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers
    });
  }

  #onFormSubmitClick = (evt) => {
    evt.preventDefault();
    this.#onFormSubmit(this.#point);
  };
}
