
import {render} from '../render.js';
import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import TripItemView from '../view/trip-item-view.js';

export default class BoardPresenter {
  eventListComponent = new EventListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(this.eventListComponent, this.container);
    render(new EditPointView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripItemView(), this.eventListComponent.getElement());
    }
  }
}
