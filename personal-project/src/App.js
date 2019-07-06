import React from 'react';
import './App.css';
import Welcome from './welcome/welcome';
import Biography from './biography/biography';
import Projects from './projects/projects';
import Media from './media/media';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Welcome name = "Pablo" />
        <Biography/>
        <Projects/>
        <Media/>
      </body>
    </div>
  );
}

export default App;
