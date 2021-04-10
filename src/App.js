import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routers from './router';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default memo(function App() {
  return (
    <HashRouter>
      <Header />
        {renderRoutes(routers)}
      <Footer />
    </HashRouter>
  )
})