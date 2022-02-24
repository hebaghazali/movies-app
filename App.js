import { Provider } from 'react-redux';
import store from './src/store/store';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import MoviesStack from './src/routes/moviesStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <StatusBar barStyle='light-content' backgroundColor='#190424' />

        <NavigationContainer>
          <MoviesStack />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
