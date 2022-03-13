import React, {lazy, Suspense} from 'react';
import { Switch } from 'react-router';
import { Loader } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/Home';
import './styles/main.scss';

const SignIn = lazy(() => import('./pages/SignIn'));
function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <ErrorBoundary>
          <Suspense fallback={<Loader center vertical size="md" content="Loading" speed="slow" />}>
            <SignIn />
          </Suspense>
          </ErrorBoundary>
        </PublicRoute>

        <PrivateRoute path="/">
          <ErrorBoundary>
          <Suspense fallback={<Loader center vertical size="md" content="Loading" speed="slow" />}>
            <Home />
          </Suspense>
          </ErrorBoundary>
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
