import { gql } from "@apollo/client";

const EPISODE_QUERY = gql`
  {
    episodesByIds(ids: [1, 2]) {
      id
      episode
      created
      air_date
      name
    }
  }
`;
// const EPISODE_QUERY_PAGE = gql`
//   {
//     episodesByIds(ids: [1, 2]) {
//       id
//       episode
//       created
//       air_date
//       name
//     }
//   }
// `;
const EPISODE_QUERY_PAGE = gql`
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
      }
    }
  }
`;
const EPISODE_QUERY_PAGE_CHARACTER = gql`
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
`;
export { EPISODE_QUERY, EPISODE_QUERY_PAGE, EPISODE_QUERY_PAGE_CHARACTER };
