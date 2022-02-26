import './App.css';
import { Provider } from "react-redux";
// import myStore,{persistor} from './redux/store'
import AppRouter from './rout/rout';
// import {PersistGate} from "redux-persist/integration/react"
import store from './redux/shoppingCart/store';





function App() {
  return (
    <div className="App">
      <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <AppRouter />
    {/* </PersistGate> */}
    </Provider>
    </div>
  );
}

export default App;
