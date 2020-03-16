import React from 'react';
import './assets/main.css';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
      <div className="w-screen h-screen">
          <div className="container mx-auto">
              <Header></Header>
              <Shop></Shop>
          </div>
      </div>
  );
}

export default App;
