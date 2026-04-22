/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Season from './pages/Season';
import Outreach from './pages/Outreach';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="join" element={<Join />} />
          <Route path="season" element={<Season />} />
          <Route path="outreach" element={<Outreach />} />
          <Route path="events" element={<Events />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
