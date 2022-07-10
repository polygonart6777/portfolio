import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import { navigationLinks } from '../utils/navigation.js';

export default function Layout() {
  return (
    <Router>
      <NavBar />
      {navigationLinks.map(({ id, component }) => (
        <section id={id} key={id} style={{ overflow: 'hidden' }}>
          {component}
        </section>
      ))}
    </Router>
  );
}
