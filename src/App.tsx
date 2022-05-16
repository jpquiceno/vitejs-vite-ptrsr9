import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container m-auto p-4">
      <div className="border rounded p-4">
        <h1 className="prism-heading-1">Hello</h1>
        <hr className="mb-4" />
        <label className="prism-label">My label</label>
        <div className="flex gap-2">
          <input className="prism-input" type="text" placeholder="new prism" />
          <button
            type="submit"
            className="p-2.5 border border-navy-900 uppercase font-medium text-white bg-navy-900 "
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
