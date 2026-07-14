import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Sample from './pages/Sample';

const container = createRoot(document.getElementById('root')!); // eslint-disable-line

container.render(
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
