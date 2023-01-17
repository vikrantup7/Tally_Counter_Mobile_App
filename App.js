import React from 'react';
import {StatusBar} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider} from 'react-redux';
import Main from './src/Main';
import {colors} from 'react-native-elements';
import {Colors} from './src/constants';
import store from './src/redux/Store';

export const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={Colors.white}
        translucent={false}
      />
      <Provider store={store}>
        <MenuProvider style={{backgroundColor: colors.black}}>
          <Main />
        </MenuProvider>
      </Provider>
    </>
  );
};
export default App;