import React from 'react';
import './App.css';
import Image from './features/image/Image'
import NextImageControl from './features/image/components/NextImageControl';
import PreviousImageControl from './features/image/components/PreviousImageControl';
import Quote from './features/quote/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <header>
          {/* <Error /> */}
          {/* <Weather /> */}            
        </header>
        <aside className="left-wallpaper-control wallpaper-control">
          <NextImageControl />
        </aside>
        <main>
          {/* <Goals /> */}
        </main>
        <aside className="right-wallpaper-control wallpaper-control">
          <PreviousImageControl />
        </aside>
        <footer>
          <Quote/>
        </footer>
      </header>
    </div>
  );
}

export default App;
