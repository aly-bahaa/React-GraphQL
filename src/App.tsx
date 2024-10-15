import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetProducts from "./components/GetProducts";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZrUHp4Y2kwdmNYUkhHNWY4Z2hDQU5XYVZybDIiLCJodWJJZCI6MSwiaW52ZW50b3J5SWQiOm51bGwsIm1lcmNoYW50SWQiOjEsInR5cGUiOiJjb3VyaWVyIiwicm9sZXMiOlsxXSwiaWF0IjoxNzA2ODE0NzQzLCJleHAiOjE3MzAxMTY1NDN9.5A1RGtfhFVTLlQy7CzTA0TQPjD-PfI_70Ggo0hcm7NA";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      alert(`GraphQl error: ${message}`);
    });
  }
});

const httpLink = new HttpLink({ uri: "https://greenlineco.site/graphql" });

const link = from([errorLink, authLink.concat(httpLink)]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GetProducts />{" "}
      </ApolloProvider>
    </>
  );
}

export default App;
