import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './container/Navigation';
import HomePage from './container/HomePage';
import PeopleList from './container/PeopleList';
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
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/people" element={<PeopleList people={people}/>} />
          <Route path="/people/:id" element={<Person people={people} setPeople={setPeople}/>} />
        </Routes>
    </Router>
  );
}

export default App;
