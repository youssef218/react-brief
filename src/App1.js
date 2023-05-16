import App from './App'
// import App from './reat'
import Semicircl from './semicircl'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App1 () {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<App />} />
          <Route path='/details'  element={<Semicircl />} />
        </Routes>
      </Router>
    </>
  )
}

export default App1
