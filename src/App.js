import React from 'react'
import './App.css';
import CitySelector from './components/CitySelector/CitySelector'
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <CitySelector/>
    </Container>
  );
}

export default App;
