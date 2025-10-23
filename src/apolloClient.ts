import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
