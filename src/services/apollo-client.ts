import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
});

const logLink = new ApolloLink((operation, forward) => {
  const shouldLog = process.env.PREPR_GRAPHQL_LOGGING === "true";
  shouldLog && console.log("Request started! Query:", operation);
  return forward(operation).map((response) => {
    shouldLog && console.log("Response received!", response);
    return response;
  });
});

const client = new ApolloClient({
  link: ApolloLink.from([logLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
