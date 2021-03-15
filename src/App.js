import { Route, Switch, Redirect } from 'react-router-dom';
import LayoutHOC from './HOC/LayoutHOC/LayoutHOC';
import Home from './containers/Home/Home';
import List from './containers/List/List';
import "antd/dist/antd.css";
import './App.less';

const App = () => {
  return (
    <LayoutHOC>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path="/home" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="*" render={() => <p>NO TENGO NADA</p>} />
      </Switch>
    </LayoutHOC>
  );
}

export default App;
