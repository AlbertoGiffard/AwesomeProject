import React, { useEffect } from 'react';
import AppNavigation from './app/navigation/AppNavigation';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage", "Non-serializable values were found in the navigation state."]);

function App() {
  return <AppNavigation/>
}

export default App;
