import Observable from '../framework/observable.js';

export default class PointsModel extends Observable {

  #service = null;
  #points = null;

  constructor (service) {
    super();
    this.#service = service;
    this.#points = this.#service.getPoints();
  }

  get points() {
    return this.#points;
  }

  update(updateType, update) {
    this.#points = this.#service.updatePoints(update);
    this._notify(updateType, update);
  }

  add(updateType, point) {
    this.#points = this.#service.addPoint(point);
    this._notify(updateType, point);
  }

  delete(updateType, point) {
    this.#points = this.#service.deletePoint(point);
    this._notify(updateType, point);
  }
}
