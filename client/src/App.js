// import react and apollo client
import React from "react"; // import react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import react router
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; // import Apollo functions

// Component imports
import Header from './components/Header';
import Feed from './components/Feed/Feed'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import Footer from './components/Footer/index'

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header />
        <div className=''>
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  )
}

export default App;
