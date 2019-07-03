import React from 'react';
import './App.css';
import Welcome from './welcome/welcome';
import Biography from './biography/biography';
import Projects from './projects/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Welcome name = "Pablo" />
        <Biography/>
        <Projects/>
      </body>
    </div>
  );
}

export default App;
