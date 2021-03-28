import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

const NotFound = withRouter(
  lazy(() =>
    import('./NotFound').then(({ NotFound }) => ({ default: NotFound }))
  )
);
const Home = withRouter(
  lazy(() =>
    import('./containers/Home').then(({ Home }) => ({ default: Home }))
  )
);
const Details = withRouter(
  lazy(() =>
    import('./containers/Details').then(({ Details }) => ({ default: Details }))
  )
);

const NotFoundLoadable = () => (
  <Suspense fallback={<div>loading...</div>}>
    <NotFound />
  </Suspense>
);
const HomeLoadable = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Home />
  </Suspense>
);

const DetailsLoadable = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Details />
  </Suspense>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path='/home' component={HomeLoadable} />
        <Route exact path='/book/:options/:id?' component={DetailsLoadable} />
        <Route path='/404' component={NotFoundLoadable} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
