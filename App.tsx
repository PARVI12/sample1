import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/screens/navigation/stacks/app-stacks';


const App: React.FC = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);

export default App;