<h3>Front Page</h3>
<img src="/public/fr.png" alt="firstpage">
<h3>Detail Page</h3>
<img src="/public/de.png" alt="firstpage">
<h3>
Graphql Implemented
</h3>

```gql
Endpoint
https://rickandmortyapi.com/graphql
```

For Fetching Episode

```gql
query Query($page: Int) {
  episodes(page: $page) {
    info {
      next
      pages
      prev
      count
    }
    results {
      air_date

      episode
      id
      name
      created
      characters {
        name
        image
        status
        species
        type
        gender
        created
      }
    }
  }
}
```
