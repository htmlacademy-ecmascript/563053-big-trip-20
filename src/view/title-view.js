import AbstractView from '../framework/view/abstract-view.js';
import { formatStringToShortDate } from '../utils.js';

function createTitleTemplate(cities, time, cost) {
  return ` <section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${cities}</h1>

    <p class="trip-info__dates">${time}</p>
  </div>

  <p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
  </p>
</section>`;
}

export default class TitleView extends AbstractView {

  #title = null;
  #dateFrom = null;
  #dateTo = null;
  #price = null;

  constructor({title, dateFrom, dateTo, price}) {
    super();
    this.#title = title;
    this.#dateFrom = dateFrom;
    this.#dateTo = dateTo;
    this.#price = price;

  }

  get template() {
    const time = `${formatStringToShortDate(this.#dateFrom)} - ${formatStringToShortDate(this.#dateTo)}`;

    return createTitleTemplate(this.#title, time, this.#price);
  }
}
