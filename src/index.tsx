import React from 'react';
import { createRoot } from 'react-dom/client';

const message = 'hoge fuga foobar';
const container = document.getElementById('root');

if (container == null) {
  throw new Error('ERROR');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <div>
      <h1>{message}</h1>
    </div>
  </React.StrictMode>
);
