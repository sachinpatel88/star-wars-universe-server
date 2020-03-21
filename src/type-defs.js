const { gql } = require('apollo-server');
module.exports = gql`
    type Apis {
        films: String
        people: String
        planets: String
        species: String
        starships: String
        vehicles: String
    }

    type Cursor {
        nextPage: Int
        prevPage: Int
    }

    type PagedPeople {
        people: [People]
        cursor: Cursor
    }

    type People {
        id: ID!
        name: String
        gender: String
        url: String
    }

    type Film {
        title: String
        director: String
        release_date: String
    }

    type Species {
        name: String
        classification: String
        designation: String
        average_height: String
        skin_colors: String
        hair_colors: String
        eye_colors: String
        average_lifespan: String
        homeworld: String
        language: String
    }

    type Starship {
        name: String
        model: String
        manufacturer: String
        cost_in_credits: String
        length: String
        max_atmosphering_speed: String
        crew: String
        passengers: String
        cargo_capacity: String
        consumables: String
        hyperdrive_rating: String
        MGLT: String
        starship_class: String
    }

    type Vehicle {
        name: String
        model: String
        manufacturer: String
        cost_in_credits: String
        length: String
        max_atmosphering_speed: String
        crew: String
        passengers: String
        cargo_capacity: String
        consumables: String
        vehicle_class: String
    }

    type Details {
        name: String
        height: String
        mass: String
        hair_color: String
        skin_color: String
        eye_color: String
        birth_year: String
        gender: String
        homeworld: String
        films: [String]
        species: [String]
        vehicles: [String]
        starships: [String]
    }

    type Planet {
        name: String
        rotation_period: String
        orbital_period: String
        diameter: String
        climate: String
        gravity: String
        terrain: String
        surface_water: String
        population: String
    }

    type Query {
        apis: Apis
        people(cursor: Int): PagedPeople
        details(id: Int): Details
        film(id: Int): Film
        species(id: Int): Species
        vehicle(id: Int): Vehicle
        starship(id: Int): Starship
        planet(id: Int): Planet
    }
`;
