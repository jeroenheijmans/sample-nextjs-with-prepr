import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = new HttpLink({
  uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
});

const logLevel = process.env.PREPR_GRAPHQL_DEBUG_LOGGING;

// Because this is a sample application we revalidate after a very
// short period of time. In a production application this should be
// a longer period and/or swapped out for an on-demand revalidation.
// See: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data
const nextRevalidateLink = new ApolloLink((operation, forward) => {
  operation.setContext({ fetchOptions: { next: { revalidate: 5 } } });
  return forward(operation);
});

const logLink = new ApolloLink((operation, forward) => {
  switch (logLevel) {
    case "full":
      console.log(
        "\n----------------------------------------------------------------"
      );
      console.log("\x1b[33mRequest started! Query:\x1b[0m", operation);
      break;
    case "minimal":
      console.log(
        "\x1b[33m  Request started! Query:\x1b[0m",
        operation.operationName,
        " - ",
        operation.variables
      );
      break;
    default:
      break;
  }

  return forward(operation).map((response) => {
    switch (logLevel) {
      case "full":
        console.log(
          "\n----------------------------------------------------------------"
        );
        console.log("\x1b[35mResponse received! Response:\x1b[0m", response);
        console.log(
          "\x1b[35mResponse received! Prepr-related headers:\x1b[0m",
          [...operation.getContext().response.headers].filter(
            ([key, _value]) =>
              key.startsWith("x-") || key.includes("cache") || key === "via"
          )
        );
        break;
      case "minimal":
        const txt = JSON.stringify(response?.data);
        console.log(
          "\x1b[35m  Response received! Response:\x1b[0m",
          txt.length > 80 ? txt.substring(0, 80) + "..." : txt
        );
        break;
      default:
        break;
    }
    return response;
  });
});

const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([logLink, nextRevalidateLink, httpLink]),
    // For ultimate debugging purposes:
    // defaultOptions: {
    //   watchQuery: {
    //     fetchPolicy: "no-cache",
    //     errorPolicy: "ignore",
    //   },
    //   query: {
    //     fetchPolicy: "no-cache",
    //     errorPolicy: "all",
    //   },
    // },
  });
});

export default getClient;
