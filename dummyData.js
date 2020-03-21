const apisData = {
    films: 'https://swapi.co/api/films/',
    people: 'https://swapi.co/api/people/',
    planets: 'https://swapi.co/api/planets/',
    species: 'https://swapi.co/api/species/',
    starships: 'https://swapi.co/api/starships/',
    vehicles: 'https://swapi.co/api/vehicles/'
};

const starshipsData = {
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer:
        'Imperial Department of Military Research, Sienar Fleet Systems',
    cost_in_credits: '1000000000000',
    length: '120000',
    max_atmosphering_speed: 'n/a',
    crew: '342953',
    passengers: '843342',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    hyperdrive_rating: '4.0',
    MGLT: '10',
    starship_class: 'Deep Space Mobile Battlestation',
    pilots: [],
    films: ['https://swapi.co/api/films/1/'],
    created: '2014-12-10T16:36:50.509000Z',
    edited: '2014-12-22T17:35:44.452589Z',
    url: 'https://swapi.co/api/starships/9/'
};

const vehiclesData = {
    name: 'Snowspeeder',
    model: 't-47 airspeeder',
    manufacturer: 'Incom corporation',
    cost_in_credits: 'unknown',
    length: '4.5',
    max_atmosphering_speed: '650',
    crew: '2',
    passengers: '0',
    cargo_capacity: '10',
    consumables: 'none',
    vehicle_class: 'airspeeder',
    pilots: [
        'https://swapi.co/api/people/1/',
        'https://swapi.co/api/people/18/'
    ],
    films: ['https://swapi.co/api/films/2/'],
    created: '2014-12-15T12:22:12Z',
    edited: '2014-12-22T18:21:15.623033Z',
    url: 'https://swapi.co/api/vehicles/14/'
};

const speciesData = {
    name: 'Droid',
    classification: 'artificial',
    designation: 'sentient',
    average_height: 'n/a',
    skin_colors: 'n/a',
    hair_colors: 'n/a',
    eye_colors: 'n/a',
    average_lifespan: 'indefinite',
    homeworld: null,
    language: 'n/a',
    people: [
        'https://swapi.co/api/people/2/',
        'https://swapi.co/api/people/3/',
        'https://swapi.co/api/people/8/',
        'https://swapi.co/api/people/23/',
        'https://swapi.co/api/people/87/'
    ],
    films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/7/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
    ],
    created: '2014-12-10T15:16:16.259000Z',
    edited: '2015-04-17T06:59:43.869528Z',
    url: 'https://swapi.co/api/species/2/'
};

const filmData = {
    title: 'The Empire Strikes Back',
    episode_id: 5,
    opening_crawl:
        'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1980-05-17'
};

const heroData = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
    ],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: [
        'https://swapi.co/api/vehicles/14/',
        'https://swapi.co/api/vehicles/30/'
    ],
    starships: [
        'https://swapi.co/api/starships/12/',
        'https://swapi.co/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.co/api/people/1/'
};

const peopleData = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [
            'https://swapi.co/api/vehicles/14/',
            'https://swapi.co/api/vehicles/30/'
        ],
        starships: [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/'
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.co/api/people/1/'
    },
    {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/'
        ],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:10:51.357000Z',
        edited: '2014-12-20T21:17:50.309000Z',
        url: 'https://swapi.co/api/people/2/'
    },
    {
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/8/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/'
        ],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:11:50.376000Z',
        edited: '2014-12-20T21:17:50.311000Z',
        url: 'https://swapi.co/api/people/3/'
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [],
        starships: ['https://swapi.co/api/starships/13/'],
        created: '2014-12-10T15:18:20.704000Z',
        edited: '2014-12-20T21:17:50.313000Z',
        url: 'https://swapi.co/api/people/4/'
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '19BBY',
        gender: 'female',
        homeworld: 'https://swapi.co/api/planets/2/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: ['https://swapi.co/api/vehicles/30/'],
        starships: [],
        created: '2014-12-10T15:20:09.791000Z',
        edited: '2014-12-20T21:17:50.315000Z',
        url: 'https://swapi.co/api/people/5/'
    },
    {
        name: 'Owen Lars',
        height: '178',
        mass: '120',
        hair_color: 'brown, grey',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '52BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/1/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:52:14.024000Z',
        edited: '2014-12-20T21:17:50.317000Z',
        url: 'https://swapi.co/api/people/6/'
    },
    {
        name: 'Beru Whitesun lars',
        height: '165',
        mass: '75',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'blue',
        birth_year: '47BBY',
        gender: 'female',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/1/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:53:41.121000Z',
        edited: '2014-12-20T21:17:50.319000Z',
        url: 'https://swapi.co/api/people/7/'
    },
    {
        name: 'R5-D4',
        height: '97',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, red',
        eye_color: 'red',
        birth_year: 'unknown',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: ['https://swapi.co/api/films/1/'],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:57:50.959000Z',
        edited: '2014-12-20T21:17:50.321000Z',
        url: 'https://swapi.co/api/people/8/'
    },
    {
        name: 'Biggs Darklighter',
        height: '183',
        mass: '84',
        hair_color: 'black',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '24BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: ['https://swapi.co/api/films/1/'],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [],
        starships: ['https://swapi.co/api/starships/12/'],
        created: '2014-12-10T15:59:50.509000Z',
        edited: '2014-12-20T21:17:50.323000Z',
        url: 'https://swapi.co/api/people/9/'
    },
    {
        name: 'Obi-Wan Kenobi',
        height: '182',
        mass: '77',
        hair_color: 'auburn, white',
        skin_color: 'fair',
        eye_color: 'blue-gray',
        birth_year: '57BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/20/',
        films: [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: ['https://swapi.co/api/vehicles/38/'],
        starships: [
            'https://swapi.co/api/starships/48/',
            'https://swapi.co/api/starships/59/',
            'https://swapi.co/api/starships/64/',
            'https://swapi.co/api/starships/65/',
            'https://swapi.co/api/starships/74/'
        ],
        created: '2014-12-10T16:16:29.192000Z',
        edited: '2014-12-20T21:17:50.325000Z',
        url: 'https://swapi.co/api/people/10/'
    }
];

module.exports = {
    starshipsData,
    vehiclesData,
    speciesData,
    filmData,
    heroData,
    peopleData,
    apisData
};
