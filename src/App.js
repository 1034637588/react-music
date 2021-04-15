import React, { memo, Suspense} from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routers from './router';
import store from './store';

import Footer from '@/components/footer';
import Header from '@/components/header';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routers)}
        </Suspense>
        <Footer />
      </HashRouter>
    </Provider>
  )
})