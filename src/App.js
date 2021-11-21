import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import Routes from './routes/Routes';
import Header from './components/Header/Header';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './reducers';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
