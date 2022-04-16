import { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Category from './pages/Category';

class App extends Component {
  render () {
    return (
      <div className="App">
          <div className='toggle-button'>
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <span id="btn">+</span>
              <span id="cancel">-</span>
            </label>
          </div>
          <Router>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<Category />} />
              <Route path='/categories/:id' element={<Category />} />
            </Routes>
          </Router>
        </div>
      );
  }
}


export default App;
