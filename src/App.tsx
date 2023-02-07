import React ,{useState} from 'react';
import Header from "./component/head";
import Task from "./component/task";
import './App.css';

const  App = () => {  
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Task />
      </div>
    </div>
  );
}

export default App;
