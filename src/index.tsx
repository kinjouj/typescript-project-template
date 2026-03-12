import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Sample from './pages/Sample';

const container = document.getElementById('root');

if (container == null) {
  throw new Error('ERROR');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/sample" replace />} />
          <Route path="/sample" element={<Sample />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
