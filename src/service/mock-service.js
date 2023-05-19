import { generateDestination } from '../mock/destination.js';
import { generateOffer } from '../mock/offer.js';
import { generatePoint } from '../mock/point.js';

import {DESTINATION_COUNT, OFFER_COUNT, POINT_COUNT, TYPES} from '../view/const.js';
import { getRandomInteger, getRandomArrayElement } from '../utils.js';

export default class MockService {
  destination = [];
  offers = [];
  points = [];

  constructor() {
    this.destinations = this.generateDestinations();
    this.offers = this.generateOffers();
    this.points = this.generatePoints();
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

  generateDestinations() {
    return Array.from({length: DESTINATION_COUNT}, () => generateDestination());
  }

  generateOffers() {
    return TYPES.map((type) => ({
      type,
      offers: Array.from({length: getRandomInteger(0, OFFER_COUNT)}, () => generateOffer(type))
    }));
  }

  generatePoints() {
    return Array.from({length: POINT_COUNT}, () => {
      const type = getRandomArrayElement(TYPES);
      const destination = getRandomArrayElement(this.destinations);

      const {offers} = this.offers.find((offerByType) => offerByType.type === type);
      const offersMaxAmount = offers.length >= OFFER_COUNT ? OFFER_COUNT : offers.length;

      const offerIds = Array.from({length: getRandomInteger(0, offersMaxAmount)}, (_, index) => offers[index].id);

      return generatePoint(type, destination.id, offerIds);
    });
  }

}
