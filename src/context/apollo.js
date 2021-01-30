import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  makeVar,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

const themeVar = makeVar("light");

const ApolloWrapperProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloWrapperProvider, themeVar };
