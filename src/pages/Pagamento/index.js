import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Perfil from './screens/Perfil';
import Pagamentos from './screens/Pagamentos';
import { createStackNavigator } from '@react-navigation/stack';

const PerfilStack = createStackNavigator();

function PerfilRoutes() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="Pagamentos" component={Pagamentos} />
    </PerfilStack.Navigator>
  );
} 


export default function Pagamentos() {
  return (
    <View style={styles.container}>
      <Text>Pagamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
