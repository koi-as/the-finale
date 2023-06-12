// import react and apollo client
import React from 'react'; // import react
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; // import react router
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'; // import Apollo functions

// import components

const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* add a navbar here */}
          <Routes>
            {/* add routes here */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
