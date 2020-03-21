const resolvers = {
    Query: {
        people: async (_source, { cursor = 1 }, { dataSources }) => {
            return dataSources.starWarsAPI.getPeople(cursor);
        },
        details: async (_source, { id }, { dataSources }) => {
            return dataSources.starWarsAPI.getDetails(id);
        },
        film: async (_source, { id }, { dataSources }) => {
            return dataSources.starWarsAPI.getFilm(id);
        },
        species: async (_source, { id }, { dataSources }) => {
            return dataSources.starWarsAPI.getSpecies(id);
        },
        vehicle: async (_source, { id }, { dataSources }) => {
            return dataSources.starWarsAPI.getVehicle(id);
        },
        starship: async (_source, { id }, { dataSources }) => {
            return dataSources.starWarsAPI.getStarship(id);
        },
        planet: async (_source, { id }, { dataSources }) => {
            return dataSources.starWarsAPI.getPlanet(id);
        }
    }
};

module.exports = resolvers;
