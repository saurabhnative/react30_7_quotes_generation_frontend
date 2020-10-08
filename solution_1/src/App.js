import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, updateAdvice] = useState('');
  const [isLoading, updateIsLoading] = useState(true);
  const fetchAdvice = () => {
    updateIsLoading(true);
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        updateIsLoading(false);
        updateAdvice(data.content)
      })
  }
  useEffect(() => {
    fetchAdvice()
  }, [])
  return (
    <div className="app row">
      <div className="card col-lg-6 col-md-6 col-10 d-flex justify-content-center">
        <div className="heading">
          {
            isLoading ?
              <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              :
              <div>{advice}</div>
          }
        </div>
        <button type="button" className="btn btn-primary" onClick={() => fetchAdvice()}>
          <span>Generate Quote</span>
        </button>
      </div>
    </div>
  );
}

export default App;