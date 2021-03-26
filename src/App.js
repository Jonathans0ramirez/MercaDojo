import { Route, Switch, Redirect } from 'react-router-dom';
import LayoutHOC from './HOC/LayoutHOC/LayoutHOC';
import List from './containers/List/List';
import "antd/dist/antd.css";
import './App.less';

const App = () => {
  return (
    <LayoutHOC>
      <Switch>
        <Redirect exact from='/' to='/ofertas' />
        <Route path="/:searchQuery" component={List} />
        <Route path="*" render={() => <p>NO TENGO NADA</p>} />
      </Switch>
    </LayoutHOC>
  );
}

export default App;
