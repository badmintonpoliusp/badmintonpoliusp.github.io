import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import AppLayout from './AppLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import HallPage from './pages/HallOfFamePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import MarcoZero from './pages/MarcoZero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* The AppLayout is now a parent route */}
        <Route path="/" element={<AppLayout />}>
          {/* This 'index' route renders when the URL is exactly "/" */}
          <Route index element={<HomePage />} />
          
          {/* All other pages are nested children */}
          <Route path="eventos" element={<EventsPage />} />
          <Route path="blog" element={<BlogIndexPage />} />
          <Route path="blog/:postId" element={<BlogPostPage />} />
          <Route path="hall-da-fama" element={<HallPage />} />
          <Route path="galeria" element={<GalleryPage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="projeto-marco-zero" element={<MarcoZero />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);