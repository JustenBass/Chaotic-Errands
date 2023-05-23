import './App.css';
import React, { useState, useEffect } from 'react';
import Person from './container/Person';

const App = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/people')
    .then((r) => r.json())
    .then((data) => setPeople(data))
  }, [])

  return (
    <Person />
  );
}

export default App;
