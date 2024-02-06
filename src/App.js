import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavigationExample from './NavigationExample';
import Page from './Page';

const App = () => (
  <BrowserRouter>
    <NavigationExample />
    <Switch>
      <Route path="/page/:id" component={Page} />
    </Switch>
  </BrowserRouter>
);