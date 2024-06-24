import React from 'react';
import './App.css';
import Image from './features/image/Image';
import NextImageControl from './features/image/components/NextImageControl';
import PreviousImageControl from './features/image/components/PreviousImageControl';
import Quote from './features/quote/Quote';
import Weather from './features/weather/Weather';
import Goals from './features/goals/Goals';
import Error from "./features/error/Error";

function App() {
  return (
    <div className="App">
      <Image />
      <header>
        <Error />
        <Weather />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <PreviousImageControl />
      </aside>
      <main>
        <Goals />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <NextImageControl />
      </aside>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
