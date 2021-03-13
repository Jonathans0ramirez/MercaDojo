import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './HOC/Layout/Layout';
import Home from './containers/Home/Home';
import List from './containers/List/List';
import './App.sass';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path="/home" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="*" render={() => <p>NO TENGO NADA</p>} />
      </Switch>
    </Layout>
  );
}

export default App;
