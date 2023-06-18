export default class DestinationsModel {

  #service = null;
  #destinations = null;

  constructor(service) {
    this.#service = service;
    this.#destinations = this.#service.getDestinations();
  }

  get destinations () {
    return this.#destinations;
  }

  getByCity(city) {
    return this.#destinations.find((pointDestination) => pointDestination.name === city);
  }

  getById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
