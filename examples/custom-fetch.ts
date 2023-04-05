import { gql, GraphQLClient } from '../src/index.js'
import fetch from 'cross-fetch'

const endpoint = `https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr`

const graphQLClient = new GraphQLClient(endpoint, { fetch: fetch })

const query = gql`
  {
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }
`

interface TData {
  Movie: { releaseDate: string; actors: Array<{ name: string }> }
}

const data = await graphQLClient.rawRequest<TData>(query)
console.log(JSON.stringify(data, undefined, 2))
