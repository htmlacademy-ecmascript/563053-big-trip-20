import dayjs from 'dayjs';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const formatStringToDateTime = (date) => dayjs(date.format).format('DD/MM/YY HH:mm'); //YYYY-MM-DDTHH

const formatStringToShortDate = (date) => dayjs(date).format('MMM DD');

export {getRandomInteger, getRandomArrayElement, formatStringToDateTime, formatStringToShortDate};