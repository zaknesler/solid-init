/* @refresh reload */

import './index.css';

import { MetaProvider, Title } from '@solidjs/meta';
import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
import { BaseLayout } from './layout/base';

const root = document.getElementById('root');

render(
  () => (
    <MetaProvider>
      <Title>Solid</Title>

      <Router root={BaseLayout}>
        <Route path="/about" component={lazy(() => import('./routes/about'))} />
        <Route path="/" component={lazy(() => import('./routes/index'))} />
      </Router>
    </MetaProvider>
  ),
  root!,
);
