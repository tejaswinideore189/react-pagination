import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ContextAPI from './Components/Context/Demo/ContextAPI';
const Navbar = lazy(() => import('./Components/Navbar'));
const Home = lazy(() => import('./Components/Home'));
const Link1 = lazy(() => import('./Components/Link1'));





   <div className='App'>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/" element={<Home />} />
              <Route path="/link" element={<Link1 />} />
            </Routes>
          </Suspense>
        </Router>
      </div>