import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen grid place-content-center radial-blue">
      {/* <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1> */}
      <div className="w-52 h-52 bg-green-500 rounded-full shadow-2xl grid place-content-center">
        <div className="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
          <div className="bg-red-500 h-16 w-16 rounded-full"></div>
        </div>
      </div>

    </div>
  );
}

export default App;
