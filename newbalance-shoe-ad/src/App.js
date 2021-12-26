import React from 'react';
import Home from "./containers/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <div>
          <main>
            <Routes>
              <Route exact element={<Home/>} path='/'>
              </Route>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  )
}


export default App;