import React from 'react';
//import { ReactDOM } from 'react';
import './App.css';
import Recipes from './components/RecipeList';

function App() {
  return (
    <div className="App">
      {/* <header 
        className="App-header" 
        style={{
          backgroundImage: "url('/wallpaper.jpg')",
          backgroundSize: "cover"
        }}>
        <a
          className="App-link"
          href="https://en.uesp.net/wiki/Skyrim:Alchemy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Alchemy
        </a>
      </header> */}
      
      <body className="body">
      <div style={{
          backgroundImage: "url('/wallpaper.jpg')",
          backgroundSize: "cover",
          height: 'auto'
        }}>
      </div>
        <Recipes />
      </body>
    </div>
  );
}

export default App;
