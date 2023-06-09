import AbstractView from '../framework/view/abstract-view.js';

const DEFAULT_FILTERS = [
  {id: 'day', text: 'Day', checked: true},
  {id: 'event', text: 'Event', disabled: true},
  {id: 'time', text: 'Time'},
  {id: 'price', text: 'Price'},
  {id: 'offer', text: 'Offers', disabled: true}
];

function createSortItem({id, text, checked, disabled} = DEFAULT_FILTERS) {


  return `<div class="trip-sort__item  trip-sort__item--${id}">
  <input id="sort-${id}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${id}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
  <label class="trip-sort__btn" for="sort-${id}">${text}</label>
</div>`;
}


function createSortViewTemplate () {
  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">

    ${DEFAULT_FILTERS.map(createSortItem).join('')}

</form>
`;
}

export default class SortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortViewTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    this.#handleSortTypeChange(evt.target.value);
  };
}
