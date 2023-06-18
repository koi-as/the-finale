// import react and apollo client
import React from "react"; // import react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // import react router
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; // import Apollo functions

// Import pages
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import LightMode from "./pages/LightMode";
import Signup from "./pages/Signup"

const client = new ApolloClient({
  uri: 'http://localhost:9001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/lightmode' element={<LightMode />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App;
