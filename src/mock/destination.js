import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { CITIES, DESCRIPTION } from './const.js';

function generateDestination() {
  const city = getRandomArrayElement(CITIES);

  return {
    id: crypto.randomUUID(),
    description: DESCRIPTION,
    name: city,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(1, 100)}`,
        'description': `${city} description`
      }
    ]

  };
}

export {generateDestination};
