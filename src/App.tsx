/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Layout from './components/Layout';

// Lazy load major routes
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Join = lazy(() => import('./pages/Join'));
const Season = lazy(() => import('./pages/Season'));
const Outreach = lazy(() => import('./pages/Outreach'));
const Events = lazy(() => import('./pages/Events'));
const Sponsors = lazy(() => import('./pages/Sponsors'));
const Donate = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));
const LegacySal = lazy(() => import('./pages/LegacySal'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Fallback loader for suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
    <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
            <Route path="legacy/sal" element={<LegacySal />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
