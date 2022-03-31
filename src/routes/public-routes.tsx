import WithSuspense from 'components/WithSuspense';
import { lazy } from 'react';
import { PUBLIC_PATHS } from './constants';
import { AppRoute } from './types';

const Search = WithSuspense(lazy(() => import('pages/Search')));
const Result = WithSuspense(lazy(() => import('pages/Result')));

const { SEARCH, RESULT } = PUBLIC_PATHS

const PUBLIC_ROUTES: AppRoute[] = [
  { path: SEARCH, element: <Search /> },
  { path: RESULT, element: <Result /> },
  { path: "/", element: <Search /> },
  { path: "*", element: <div>Page not found</div> },
]

export default PUBLIC_ROUTES