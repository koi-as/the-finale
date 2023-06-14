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
  ApolloProvider
} from '@apollo/client'; // import Apollo functions

// Component imports
import Feed from './components/Feed/Feed'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'

const test = "Hello Bitter! :D"
// import components

const client = new ApolloClient({
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      {test}
      <Router>
        <div className='columns-3'>
          {/* add a navbar here */}
          <LeftSidebar />
          <Feed />
          <RightSidebar />
          <Routes>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
