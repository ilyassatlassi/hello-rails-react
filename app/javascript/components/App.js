import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Random from './Greeting';
import Home from './Home';
import store from '../redux/store';
import { Provider } from 'react-redux';

const App = () => {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Random />} />
            {/* Add more routes for other components */}
          </Routes>
        </Router>
      </Provider>
    );
  };


export default App;
