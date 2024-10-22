import { Game } from '../../src/generated/graphql';
import { faker } from '@faker-js/faker';

export const createGame = (): Game => {
  return {
    id: faker.number.int().toString(),
    title: faker.commerce.productName(),
    platform: [faker.word.sample()]
  };
};

