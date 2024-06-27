import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './Pages/Lading.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Pages/NotFound.tsx';

const AppRouter = () => {
  return (
      <Router>
          <Routes>
              <Route index path='/' element={<LandingPage />} />
              <Route path='*' element={<NotFoundPage/>} />
          </Routes>
      </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <AppRouter />
  </React.Fragment>,
)
