import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseDetails></CourseDetails>
    </div>
  );
}

export default App;
