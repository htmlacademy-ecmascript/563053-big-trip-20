export default class OfferModel {

  #offersApiService = null;
  #offers = [];

  constructor({offersApiService}) {
    this.#offersApiService = offersApiService;
  }

  async init() {
    try {
      this.#offers = await this.#offersApiService.offers;
    } catch(err) {
      this.#offers = [];
    }
  }

  get offers() {
    return this.#offers;
  }

  getByType(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }
}
