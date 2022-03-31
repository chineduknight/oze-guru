import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import PUBLIC_ROUTES from 'routes/public-routes'

const AppWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const Authenticated = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  );
};
export default Authenticated;