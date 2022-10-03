import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@app/common.css';
import { App } from '@app/components/App/App';
import { store } from '@app/store';
import { NetworkStatusContextProvider } from '@features/networkStatus/NetworkStatusContextProvider';
import { initI18n } from '@features/locale/utils';
import * as Sentry from '@sentry/react';
import { Error } from '@components/Error/Error';

declare global {
  interface Window {
    SENTRY_RELEASE: string;
  }
}

if (window.SENTRY_RELEASE) {
  Sentry.init({
    dsn: 'https://3b5f87c52947426c86d77f8fc7382aaf@o1144149.ingest.sentry.io/6206560',
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js?')
      .then(function () {
        // eslint-disable-next-line no-console
        console.log('Service Worker Registered!!');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('cant register SW', error);
      });
  });
}

initI18n(() => {
  ReactDOM.render(
    <Sentry.ErrorBoundary fallback={<Error />}>
      <Provider store={store}>
        <NetworkStatusContextProvider>
          <Router>
            <App />
          </Router>
        </NetworkStatusContextProvider>
      </Provider>
    </Sentry.ErrorBoundary>,
    document.getElementById('root')
  );
});
