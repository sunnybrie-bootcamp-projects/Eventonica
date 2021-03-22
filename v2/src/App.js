import './App.css';

import React from 'react';
import EventBoard from './components/EventBoard';
import Header from './components/Header';
//import EventAddForm from "./components/EventAddForm";



function App() {
  const currentUser = {
    username: "Blue",
    password: "bananas123",
    favorite_events: [0, 2]
  };

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <EventBoard currentUser={currentUser}/>
    </div>
  );
}

export default App;


