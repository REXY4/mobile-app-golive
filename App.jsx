import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistore, store } from './src/redux/stores';
import Route from './src/routes';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
  <NativeBaseProvider>
  <NavigationContainer>
    <Route/>
  </NavigationContainer>
  </NativeBaseProvider>
  </PersistGate>
  </Provider>
  );
}

export default App;
