const { RESTDataSource } = require('apollo-datasource-rest');
const {
    peopleData,
    heroData,
    filmData,
    speciesData,
    vehiclesData,
    starshipsData
} = require('./../dummyData');

// For faster development, making easy to switch between
// online API request and dummyData.js
// Add if conditions to all resolvers
const useDummyData = true;

class StarWarsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.co/api/';
    }

    async getApis() {
        const response = await this.get('');
        return response.results;
    }

    async getPeople(cursor) {
        if (useDummyData) {
            return {
                people: peopleData,
                cursor: {
                    nextPage: 2
                }
            };
        }

        const response = await this.get(`people/?page=${cursor}`);
        let nextPage;
        if (!response.next) {
            nextPage = null;
        } else {
            nextPage = new URL(response.next).searchParams.get('page');
        }

        return {
            people: response.results,
            cursor: {
                nextPage
            }
        };
    }

    async getDetails(id) {
        if (useDummyData) {
            return heroData;
        }
        const response = await this.get(`people/${id}`);
        return response;
    }

    async getFilm(id) {
        if (useDummyData) {
            return filmData;
        }
        const response = await this.get(`films/${id}`);
        return response;
    }

    async getSpecies(id) {
        if (useDummyData) {
            return speciesData;
        }
        const response = await this.get(`species/${id}`);
        return response;
    }

    async getVehicle(id) {
        if (useDummyData) {
            return vehiclesData;
        }
        const response = await this.get(`vehicles/${id}`);
        return response;
    }

    async getStarship(id) {
        if (useDummyData) {
            return starshipsData;
        }
        const response = await this.get(`starships/${id}`);
        return response;
    }

    async getPlanet(id) {
        if (useDummyData) {
            return starshipsData;
        }
        const response = await this.get(`planets/${id}`);
        return response;
    }
}

module.exports = StarWarsAPI;
