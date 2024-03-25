import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
});

const logLevel = process.env.PREPR_GRAPHQL_DEBUG_LOGGING;

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

const client = new ApolloClient({
  link: ApolloLink.from([logLink, httpLink]),
  cache: new InMemoryCache(),

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

export default client;
