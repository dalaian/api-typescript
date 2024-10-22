import { faker } from '@faker-js/faker/.';
import client from './client';
import { gql } from '@apollo/client';
import { createGame } from './factories/gameFactory';

describe('GraphQL Games', () => {

    it('should return games', async () => {
        const GAMES_QUERY = gql`
        query Games {
            games {
                id
                title
                platform
            }
        }
    `;
        const response = await client.query({ query: GAMES_QUERY });
        expect(response.data.games).not.toBeNull();
        expect(response.data.games.length).toBeGreaterThanOrEqual(2);
    });

    it('should create a random game', async () => {
        const randomName = faker.commerce.productName();

        const CREATE_GAME = gql`
            mutation AddGame($game: AddGameInput!) {
                addGame (game: $game){
                    id,
                    title,
                    platform
                }
            }
        `
        const response = await client.mutate({
            mutation: CREATE_GAME,
            variables: {
                game: {
                    title: randomName,
                    platform: faker.word.sample()
                }
            }
        });

        expect(response.data.addGame).toBeDefined();
        expect(response.data.addGame.title).toBe(randomName);
    })

    it("should create a random game from factory", async () => {
        const game = createGame();
        const CREATE_GAME = gql`
            mutation AddGame($game: AddGameInput!) {
                addGame (game: $game){
                    id,
                    title,
                    platform
                }
            }
        `
        const response = await client.mutate({
            mutation: CREATE_GAME,
            variables: {
                game
            }
        });
        expect(response.data.addGame).toBeDefined();
        expect(response.data.addGame.title).toBe(game.title);
    })


});
