export default class DestinationsModel {

  #destinationsApiService = null;
  #destinations = [];

  constructor({destinationsApiService}) {
    this.#destinationsApiService = destinationsApiService;
  }

  async init() {
    try {
      this.#destinations = await this.#destinationsApiService.destinations;
    } catch(err) {
      this.#destinations = [];
    }
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
