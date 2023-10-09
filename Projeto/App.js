import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AgendamentoScreen from './AgendamentoScreen';
import ConsultasAgendadasScreen from './ConsultasAgendadasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
        <Stack.Screen name="ConsultasAgendadas" component={ConsultasAgendadasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
