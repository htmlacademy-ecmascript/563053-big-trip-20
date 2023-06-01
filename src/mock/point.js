import dayjs from 'dayjs';
import { getRandomInteger } from '../utils.js';
import { Price } from './const.js';
import { getDate } from './utils.js';

function generatePoint(type, destinationID, offerIDs) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dateFrom: getDate({next: false}),
    dateTo: getDate({next: true}),
    destination: destinationID,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: offerIDs,
    type
  };
}

function isPointFuture(point) {
  return dayjs().isBefore(point.dateFrom);
}

function isPointPresent(point) {
  return (dayjs().isAfter(point.dateFrom) && dayjs().isBefore(point.dateTo));
}

function isPointPast(point) {
  return dayjs().isAfter(point.dateTo);
}

export {generatePoint, isPointFuture, isPointPresent, isPointPast};
