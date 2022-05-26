import './App.css';
import { Provider } from "react-redux";
import AppRouter from './rout/rout';
import store from './redux/shoppingCart/store';





function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
