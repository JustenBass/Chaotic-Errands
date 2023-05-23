import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './container/Navigation';
import Person from './container/Person';

const App = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then((r) => r.json())
    .then((data) => setPeople(data))
  }, [])

  return (
    <Router>
      <Navigation/>

      <Routes>
        <Route path="/people/:id" element={<Person people={people} setPeople={setPeople}/>} />
      </Routes>
    </Router>
  );
}

export default App;
