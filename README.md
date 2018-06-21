# apollo-datasource-rest-demo

Demo repo playing using Apollo Server 2.0 and the new [apollo-datasource-rest](https://www.apollographql.com/docs/apollo-server/v2/features/data-sources.html) package.

## API's

### [The Movie Database](https://www.themoviedb.org/documentation/api)

#### Environment Variables

1. `THE_MOVIE_DB_API_KEY`: You can obtain on from your [account](https://www.themoviedb.org) page
2. `THE_MOVIE_DB_BASE_URL`: https://api.themoviedb.org

#### Queries

```
searchMovies(query: String)
```

