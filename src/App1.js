import App from './App'
import Details from './semicircl'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App1 () {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<App />} />
          <Route path='/details'  element={<Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App1
