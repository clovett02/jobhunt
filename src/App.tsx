
// import './App.css'
import { NavMenu } from './components/NavMenu.tsx';
import { BrowserRouter, Routes, Route } from 'react-router'
import { AppRoutes } from './AppRoutes'

function App() {

  return (
    <div className='App'>
      <NavMenu/>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((r) =>
          <Route path={r.path} element={r.element} />)}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
