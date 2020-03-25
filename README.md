# Star Wars Universe Server

GraphQL server for Star Wars Universe API provided by http://swapi.co/.

# Running server on local

## Setup

```sh
clone https://github.com/sachinpatel88/star-wars-universe-server.git

cd ./star-wars-universe-server/
npm install
npm start
```

Open http://localhost:4000/ for GraphiQL - GraphQL query playground.

## Connect with Star Wars Universe Client ([star-wars-universe](https://github.com/sachinpatel88/star-wars-universe) repository)

Note: If your project is running on `http://localhost:4000/`, skip this section.

If your project is running on any other URL or port, then you may need to change the server url in [star-wars-universe](https://github.com/sachinpatel88/star-wars-universe) project as well.

If haven't cloned [star-wars-universe](https://github.com/sachinpatel88/star-wars-universe)

```sh
Clone https://github.com/sachinpatel88/star-wars-universe
```

Open src/webpack.config.js and find

```javascript
new webpack.DefinePlugin({
    GRAPHQL_SERVER_URL: JSON.stringify(
        process.env.GRAPHQL_SERVER_URL || 'http://localhost:4000/'
    )
}),
```

```
Replace http://localhost:4000/ with [NEW_URL] Or you can pass env.GRAPHQL_SERVER_URL from node start command.
```

# Todo

-   ~~Deploy on server~~
